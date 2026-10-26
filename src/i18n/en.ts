// English copy — typed against the Turkish dictionary so the keys can't drift.
import type { Dictionary } from './tr';

const en: Dictionary = {
  meta: {
    title: 'Masadan — QR Table Ordering for Restaurants | North Cyprus',
    description:
      'Guests scan the QR code on their table, browse your menu and order. The ticket prints in your kitchen within seconds.',
  },
  nav: {
    label: 'Main menu',
    howItWorks: 'How it works',
    features: 'Features',
    faq: 'FAQ',
    languageLabel: 'Language',
  },
  cta: {
    requestDemo: 'Request a demo',
    tryDemo: 'Try the live demo',
    whatsapp: 'WhatsApp',
    whatsappMessage: "Hi, I'd like a Masadan demo for my venue.",
  },
  hero: {
    headline: 'Orders from the table, straight to the kitchen.',
    sub: 'Guests scan the QR code on their table, browse your menu and order. The ticket prints in your kitchen within seconds — no waiting for a waiter, no mistaken orders.',
  },
  problem: {
    text: "At peak hours, staff can't keep up. Orders get written down wrong. Guests wait just to order.",
    solutionLead: 'With Masadan:',
    solution: 'guests order themselves, your team focuses on service.',
  },
  how: {
    title: 'How it works',
    steps: [
      { title: 'Scan', text: 'Guests scan the table QR with their camera. No app to install.' },
      { title: 'Choose & order', text: 'They pick from a photo menu in Turkish or English.' },
      {
        title: 'It hits the kitchen',
        text: 'The order appears on your order screen and prints in the kitchen instantly.',
      },
    ],
  },
  features: {
    title: 'Features',
    items: [
      { title: 'Turkish & English menu', text: 'For locals and tourists alike.' },
      { title: 'Works with your printer', text: 'No new hardware needed.' },
      { title: 'Live order screen', text: 'Track every table from one screen.' },
      { title: 'Easy menu management', text: 'Update prices, items and photos yourself.' },
      { title: 'On-site ordering only', text: "Orders can't be placed from outside the venue." },
      { title: 'Quick setup', text: 'We prepare your QR codes and handle the setup.' },
    ],
  },
  proof: {
    inUseAt: 'In use at Heaven Restaurant',
  },
  demoBand: {
    text: 'Try it as a guest. Place an order on the demo menu and see how it works.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Do I need new hardware?', a: 'No. Your existing printer and a computer are enough.' },
      {
        q: 'Does it work with AKINSOFT?',
        a: "Orders print to your kitchen printer; let's talk about POS integration.",
      },
      { q: 'How long does setup take?', a: 'Usually ready within a few days.' },
      { q: 'What if the internet goes down?', a: 'Your staff can keep taking orders as usual.' },
      { q: 'How much does it cost?', a: "A monthly subscription based on your venue. Let's talk." },
      { q: 'Do guests need an app?', a: 'No, their phone camera is enough.' },
    ],
  },
  contact: {
    title: 'Contact',
    text: "Request a demo for your venue. We'll get back to you.",
    fields: {
      name: 'Your name',
      venue: 'Venue name',
      town: 'Town',
      tables: 'Number of tables',
      phone: 'Phone',
    },
    submit: 'Send',
    success: "Thanks! We'll be in touch shortly.",
    emailLabel: 'Email',
  },
  footer: {
    privacy: 'Privacy',
    region: 'North Cyprus',
  },
};

export default en;
