// Set PUBLIC_CONTACT_EMAIL at build time once ORVIO's official address exists.
export const contactEmail: string | undefined = import.meta.env.PUBLIC_CONTACT_EMAIL || undefined;

// Single source for the legal pages' "last updated" date.
export const legalUpdated = "17 October 2026";
