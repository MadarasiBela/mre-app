"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cleaningFromHtml;
// import sanitizeHtml from 'sanitize-html';
/**
 * Cleans a string from HTML tags and special characters.
 * @param {string} unsafe - The input string potentially containing HTML.
 * @returns {string} - The cleaned string with HTML tags and special characters escaped.
 */
function cleaningFromHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
