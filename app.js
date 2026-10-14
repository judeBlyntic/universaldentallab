const $ =(s, el = document) => el.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const play = v => v.play().catch(() => {}); // failed load or blocked play: poster stays
document.documentElement.classList.add('js');

// Messages are delivered by FormSubmit. After activating it, swap the address for the
// random alias FormSubmit emails you, so the real address isn't in the page source.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/jude@blyntic.co.nz';
const FALLBACK_EMAIL = 'jude@blyntic.co.nz';

async function send(fields) {
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _template: 'table', ...fields }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) !== 'true') throw new Error((data.message || `HTTP ${res.status}`).replace(/\.$/, ''));
}

// Hero: scroll progress drives the headline (--p) and the video's time.
// The 2 MB clip only starts downloading after the page has loaded; the poster covers until then.
const hero = $('.hero'), heroVideo = $('.hero-video');
if (hero) {
  let raf = 0;
  const scrub = () => {
    raf = 0;
    const r = hero.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight || 1)));
    hero.style.setProperty('--p', p.toFixed(4));
    if (!reduce && heroVideo.readyState >= 1) heroVideo.currentTime = p * (heroVideo.duration - 0.05);
  };
  addEventListener('scroll', () => { raf ||= requestAnimationFrame(scrub); }, { passive: true });
  heroVideo.addEventListener('loadedmetadata', scrub);
  if (!reduce) {
    const load = () => { heroVideo.preload = 'auto'; heroVideo.src = heroVideo.dataset.src; };
    document.readyState === 'complete' ? load() : addEventListener('load', load, { once: true });
  }
  scrub();
}

// Video cards: play on hover or focus, pause and rewind on leave. Image cards zoom in CSS.
const canHover = matchMedia('(hover: hover)').matches;
for (const card of document.querySelectorAll('.card.has-video')) {
  const v = $('video', card);
  const stop = () => { v.pause(); v.currentTime = 0; };
  card.addEventListener('focusin', () => play(v));
  card.addEventListener('focusout', e => { if (!card.contains(e.relatedTarget)) stop(); });
  if (canHover) {
    card.addEventListener('mouseenter', () => play(v));
    card.addEventListener('mouseleave', stop);
  } else {
    $('.card-media', card).addEventListener('click', () => (v.paused ? play(v) : v.pause()));
  }
}

// Contact popup: any [data-contact] opens it; data-service preselects the service.
const contact = $('#contact'), contactForm = $('.contact-form'), status = $('.form-status');
let opener = null;
document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-contact]');
  if (!trigger) return;
  e.preventDefault();
  opener = trigger;
  if (trigger.dataset.service) contactForm.elements.service.value = trigger.dataset.service;
  status.textContent = '';
  contact.showModal();
});
$('.modal-close').addEventListener('click', () => contact.close());
contact.addEventListener('click', e => { if (e.target === contact) contact.close(); }); // backdrop
contact.addEventListener('close', () => opener?.focus());
contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  const f = contactForm.elements, btn = $('button[type=submit]', contactForm);
  btn.disabled = true;
  btn.textContent = 'Sending…';
  status.className = 'form-status';
  status.textContent = '';
  try {
    await send({
      _subject: `UDL website enquiry: ${f.service.value}`,
      _replyto: f.email.value,
      _honey: f._honey.value,
      name: f.name.value, clinic: f.clinic.value, email: f.email.value, phone: f.phone.value,
      service: f.service.value, message: f.message.value,
    });
    contactForm.reset();
    status.classList.add('ok');
    status.textContent = 'Thanks, your message is on its way. We’ll be in touch soon.';
  } catch (err) {
    status.classList.add('err');
    status.replaceChildren(`Sorry, that didn’t send (${err.message}). Please email `,
      Object.assign(document.createElement('a'), { href: `mailto:${FALLBACK_EMAIL}`, textContent: FALLBACK_EMAIL }), ' instead.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send message';
  }
});

// Reveal sections once; play lazy videos only while on screen (that's also when they download).
const io = new IntersectionObserver(entries => {
  for (const { target, isIntersecting } of entries) {
    if (target.tagName === 'VIDEO') isIntersecting ? play(target) : target.pause();
    else if (isIntersecting) { target.classList.add('in'); io.unobserve(target); }
  }
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
if (!reduce) document.querySelectorAll('.lazy-play').forEach(v => io.observe(v));
