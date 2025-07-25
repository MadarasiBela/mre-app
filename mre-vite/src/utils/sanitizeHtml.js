"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sanitizeHtmlInput;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
/**
 * Sanitizes input by removing HTML tags and attributes.
 * @param {string} unsafe - The input string potentially containing HTML.
 * @returns {string} - The sanitized string with HTML tags removed.
 */
function sanitizeHtmlInput(unsafe) {
    return (0, sanitize_html_1.default)(unsafe, {
        allowedTags: ['b', 'i', 'u', 'strong', 'em', 'p', 'br'],
        allowedAttributes: {}
    });
}
// export default sanitizeHtmlInput;
