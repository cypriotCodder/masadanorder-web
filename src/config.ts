// Site-wide constants. Values marked PLACEHOLDER must come from the owner before launch.

/** International format, digits only, as wa.me expects. PLACEHOLDER. */
export const WHATSAPP_NUMBER = '905330000000';

/** PLACEHOLDER. */
export const CONTACT_EMAIL = 'info@masadanorder.com';

export const DEMO_URL = 'https://demo.masadanorder.com';

export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
