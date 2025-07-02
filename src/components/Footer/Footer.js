"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const jsx_runtime_1 = require("react/jsx-runtime");
function Footer({ message, extra }) {
    return ((0, jsx_runtime_1.jsxs)("footer", { children: [(0, jsx_runtime_1.jsx)("span", { children: message }), extra && (0, jsx_runtime_1.jsx)("span", { className: "footer-extra", children: extra })] }));
}
