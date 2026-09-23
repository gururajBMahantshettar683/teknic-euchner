/**
 * Utility helpers for the Teknic Euchner site
 */

/**
 * Sanitizes a string for use as an HTML id or data attribute
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Builds a Google Maps link from an address string
 */
export function buildMapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/**
 * Builds a mailto link
 */
export function buildMailtoLink(email) {
  return `mailto:${email}`;
}

/**
 * Builds a tel link
 */
export function buildTelLink(phone) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

/**
 * Returns appropriate alt text for images
 */
export function getImageAlt(label, context = "") {
  return context ? `${label} - ${context}` : label;
}
