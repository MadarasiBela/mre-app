import sanitizeHtml from 'sanitize-html';
/**
 * Sanitizes input by removing HTML tags and attributes.
 * @param {string} unsafe - The input string potentially containing HTML.
 * @returns {string} - The sanitized string with HTML tags removed.
 */
export default function sanitizeHtmlInput(unsafe: string): string {
  return sanitizeHtml(unsafe, {
    allowedTags: ['b', 'i', 'u', 'strong', 'em', 'p', 'br'],
    allowedAttributes: {}
  });
}
// export default sanitizeHtmlInput;