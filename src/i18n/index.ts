import tr, { type Dictionary } from './tr';
import en from './en';

export type Lang = 'tr' | 'en';
export type { Dictionary };

const dictionaries: Record<Lang, Dictionary> = { tr, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Home path for a locale: `/` for Turkish, `/en/` for English. */
export function homePath(lang: Lang): string {
  return lang === 'tr' ? '/' : '/en/';
}

export function privacyPath(lang: Lang): string {
  return lang === 'tr' ? '/gizlilik/' : '/en/privacy/';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'tr' ? 'en' : 'tr';
}

/** Section anchors, shared by both locales so the language toggle can keep the section. */
export const sections = {
  howItWorks: 'how-it-works',
  features: 'features',
  faq: 'faq',
  contact: 'contact',
  /** :target of the contact form's success message — the form handler redirects here. */
  demoSent: 'demo-sent',
} as const;
