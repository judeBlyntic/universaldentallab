// Single source of truth for site content. Edit here, then run `node build.mjs`.
// Business facts come from the live universaldentallab.co.nz (Oct 2026).

export const SITE = 'https://universaldentallab.co.nz';

export const lab = {
  name: 'Universal Dental Laboratory',
  short: 'Universal Dental Lab',
  tagline: 'Your A–Z dental lab',
  summary: 'Universal Dental Laboratory (UDL) is a dental laboratory in Blockhouse Bay, Auckland, New Zealand, making crown & bridge, implant restorations, All-on-4/6 full-arch prostheses, orthodontic appliances, surgical guides and smile design for dental clinics across New Zealand for over 15 years.',
  street: '70 Mcfadzean Drive',
  suburb: 'Blockhouse Bay',
  city: 'Auckland',
  postcode: '0600',
  phone: '021 053 8156',
  phoneIntl: '+64210538156',
  email: 'info@udl.nz',
  emailAlt: 'universaldentallabnz@gmail.com',
  rxForms: 'https://drive.google.com/drive/folders/1DLwlyOq2QOLuRb28wxeqlomFmraf5q83',
  scanners: ['3Shape TRIOS', 'iTero', 'Medit'],
  offer: '20% off crown & bridge for your first three months',
};

// media: { video, poster } for hover-play cards, or { img } for still cards. alt describes the placeholder art.
export const services = [
  {
    slug: 'crown-and-bridge',
    name: 'Crown & bridge',
    title: 'Crown & Bridge',
    summary: 'Single crowns to multi-unit bridges, designed from your scan and finished by hand at the bench.',
    lede: 'Single crowns and multi-unit bridges in zirconia, IPS e.max and porcelain-fused-to-metal. Designed in CAD/CAM, then shaded and finished by technicians who have worked chairside and know what a good fit saves you.',
    legend: 'Material',
    options: [
      ['Zirconia', 'Strong enough for posterior bridges; monolithic or layered for aesthetics.'],
      ['E.max', 'Lithium disilicate for high-aesthetic anterior crowns.'],
      ['PFM', 'Porcelain fused to metal when you want a proven metal substructure.'],
    ],
    send: ['Digital scan (TRIOS, iTero or Medit) or impressions', 'Opposing arch and bite registration', 'Shade, ideally with a photo next to the shade tab', 'A completed RX form'],
    faqs: [
      ['Which crown materials do you work in?', 'Zirconia (monolithic and layered), IPS e.max lithium disilicate and porcelain-fused-to-metal. Note your preferred material on the RX form, or call the lab if you want advice for a specific case.'],
      ['Is there an offer for new dentists?', 'Yes. New dentists get 20% off all crown & bridge work for their first three months with UDL.'],
      ['Can I send a digital scan instead of impressions?', 'Yes. UDL accepts scans from 3Shape TRIOS, iTero and Medit, as well as conventional impressions.'],
    ],
    media: { img: '/assets/img/svc-crown-and-bridge.webp' },
    alt: 'Six-unit ceramic bridge on a white lab bench',
  },
  {
    slug: 'implants',
    name: 'Implants',
    title: 'Implant Restorations',
    summary: 'Custom abutments and implant crowns, from a single tooth through to full-arch.',
    lede: 'Custom abutments and implant-retained crowns and bridges, screw- or cement-retained. Tell us the system and platform and we take it from scan body to finished restoration.',
    legend: 'Retention',
    options: [
      ['Screw-retained', 'Retrievable restorations on a ti-base or custom abutment.'],
      ['Cement-retained', 'A custom abutment with a separate crown.'],
      ['Full-arch', 'Four or six implants: see All-on-4 / All-on-6.'],
    ],
    send: ['Scan with scan bodies, or impression copings and analogs', 'Implant system, platform and connection on the RX form', 'Opposing arch and bite registration', 'Shade and any photos'],
    faqs: [
      ['Which implant systems can you restore?', 'Note the implant system and platform on the RX form. If you are unsure whether we support a system, call the lab before sending the case.'],
      ['Screw-retained or cement-retained?', 'Both. Screw-retained is easier to retrieve; cement-retained suits some angulations and aesthetics. We build to your prescription.'],
      ['Do you make full-arch implant prostheses?', 'Yes. See All-on-4 / All-on-6 for full-arch work on four or six implants.'],
    ],
    media: { img: '/assets/img/svc-implants.webp' },
    alt: 'Ceramic crown on an abutment beside a titanium dental implant',
  },
  {
    slug: 'all-on-4-6',
    name: 'All-on-4/6',
    title: 'All-on-4 & All-on-6',
    summary: 'Full-arch implant prostheses on four or six implants.',
    lede: 'Full-arch implant prostheses on four or six implants, built to your surgical and restorative plan. Denture scans are welcome as a starting point for tooth set-up.',
    legend: 'Arch',
    options: [
      ['All-on-4', 'Full arch supported by four implants.'],
      ['All-on-6', 'Full arch supported by six implants for extra support.'],
    ],
    send: ['Scans with scan bodies, or an implant-level impression', 'Implant system and abutment details', 'Bite registration and vertical dimension', 'Existing denture scan and facial photos, if available'],
    faqs: [
      ['Should I choose four or six implants?', 'That is a clinical decision for you and your patient. We build the prosthesis to your plan, and are happy to talk a case through by phone.'],
      ['Do you accept denture scans?', 'Yes. A scan of the patient’s existing denture is a useful starting point for tooth position and vertical dimension.'],
      ['Can you also make the surgical guide?', 'Yes. UDL makes surgical guides as well, so planning and the final prosthesis come from the same lab.'],
    ],
    media: { img: '/assets/img/svc-all-on-4.webp' },
    alt: 'Upper and lower full-arch prostheses above implant-supported jaw models',
  },
  {
    slug: 'orthodontic-appliances',
    name: 'Orthodontic appliances',
    title: 'Orthodontic Appliances',
    summary: 'Retainers, night guards and clear aligners, made to your prescription.',
    lede: 'Full orthodontic appliance work for your clinic: retainers, night guards and clear aligners, made from your scans or impressions to your prescription.',
    legend: 'Appliance',
    options: [
      ['Retainer', 'Clear or wire retainers to hold the result.'],
      ['Night guard', 'Hard or soft guards for bruxism and protection.'],
      ['Clear aligner', 'Thermoformed aligners made to your treatment plan.'],
    ],
    send: ['Scans or impressions of both arches', 'Bite registration', 'Appliance type and design notes on the RX form'],
    faqs: [
      ['Which orthodontic appliances do you make?', 'Retainers, night guards and clear aligners. If you need something else, call the lab: we may still be able to help.'],
      ['How should I pack impressions?', 'Disinfect impressions and bites, bag them where possible, wrap models, secure everything so nothing moves in transit, and label the box clearly.'],
      ['Do you work from digital scans?', 'Yes. Scans from 3Shape TRIOS, iTero and Medit are all accepted.'],
    ],
    media: { img: '/assets/img/svc-ortho.webp' },
    alt: 'Retainer, clear aligners, night guard, mouthguard and veneer mock-up on a lab bench',
  },
  {
    slug: 'surgical-guides',
    name: 'Surgical guides',
    title: 'Surgical Guides',
    summary: 'Guides that transfer your implant plan to the mouth for more predictable placement.',
    lede: 'Surgical guides that carry your implant plan into the mouth, helping place implants where the restoration needs them for better patient outcomes.',
    legend: 'Support',
    options: [
      ['Tooth-supported', 'Seats on the remaining dentition for partially edentulous cases.'],
      ['Tissue-supported', 'Seats on the mucosa for edentulous arches.'],
    ],
    send: ['Intraoral scan', 'CBCT data (DICOM)', 'Implant system and planned positions', 'A completed RX form'],
    faqs: [
      ['What do you need to make a surgical guide?', 'An intraoral scan, the CBCT (DICOM files), the implant system you will use and your planned implant positions.'],
      ['Can UDL make the final restoration as well?', 'Yes. We make implant crowns, bridges and All-on-4/6 prostheses, so the guide and the final work come from one lab.'],
      ['How do I send large CBCT files?', 'Call or email the lab at info@udl.nz and we will arrange the best way to transfer them.'],
    ],
    media: { img: '/assets/img/svc-surgical-guides.webp' },
    alt: 'Clear 3D-printed surgical guide with metal sleeves beside a jaw model',
  },
  {
    slug: 'smile-design',
    name: 'Smile design',
    title: 'Smile Design',
    summary: 'Digital Smile Design blueprints and wearable mock-ups before treatment starts.',
    lede: 'Full smile blueprints with Digital Smile Design (DSD). We turn intraoral scans into a digital mock-up and a wearable veneer mock-up, so your patient can see and try the result before any treatment begins.',
    legend: 'Mock-up',
    options: [
      ['Digital mock-up', 'An on-screen preview of the planned smile.'],
      ['Wearable mock-up', 'Veneer mock-up the patient can try in.'],
    ],
    send: ['Intraoral scans of both arches', 'Full-face and retracted smile photos', 'Your patient’s goals and any constraints'],
    faqs: [
      ['What is a wearable mock-up?', 'A thin veneer mock-up made from the digital design that your patient can try in, so they can see and feel the planned smile before committing to treatment.'],
      ['What do you need from us?', 'Intraoral scans, a set of facial and smile photos, and a note on what your patient wants to change.'],
      ['Which scanners work?', 'Scans from 3Shape TRIOS, iTero and Medit are all accepted.'],
    ],
    media: { img: '/assets/img/svc-smile-design.webp' },
    alt: 'Upper front teeth on a dental model',
  },
];

// General FAQs, rewritten from the live site.
export const faqs = [
  ['How do I start sending cases to UDL?', 'Send us a message through the contact form or call 021 053 8156. We will send you RX forms, and clinics within about 5 km of Blockhouse Bay or central Auckland can arrange drop-off at a time that suits.'],
  ['Is there an offer for new dentists?', 'Yes: 20% off all crown & bridge for your first three months. You can also take up an optional free business and website audit from our partner agency, Dental Ascend.'],
  ['How should I pack a case?', 'Disinfect all impressions and bites, bag items where possible, wrap models, secure everything so nothing moves in transit, and label the box clearly.'],
  ['How do cases get to and from the lab?', 'By track-and-trace courier, with same-day or next-day options depending on where you are. Same-day pick-up or drop-off is available for urgent cases; fees may apply.'],
  ['What is the earliest a case can come back?', 'Call the lab with the patient and case details. For upcoming cases, tell us what you need in advance: with a little planning we can usually accommodate you.'],
  ['Are RX forms free, and how do I get them?', 'Yes. Download them from this site, email us at info@udl.nz, or ask and we will courier a set to your clinic.'],
  ['Which digital scans do you accept?', 'Scans from 3Shape TRIOS, iTero and Medit intraoral scanners, plus denture scans.'],
  ['How do I connect my 3Shape TRIOS to UDL?', 'Create and activate a 3Shape Communicate account. In TRIOS, open Lab Connection, choose Configure Communicate, then Add lab. On the 3Shape Communicate portal go to Connections, Add connection, search for Universal Dental Lab and click Connect. Call us on 021 053 8156 to confirm; once we accept, our order templates download to your TRIOS automatically.'],
];
