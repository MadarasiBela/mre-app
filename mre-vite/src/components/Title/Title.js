"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Title;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Title.css");
function Title({ title, currentStatus }) {
    return ((0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "title", children: title }), currentStatus && ((0, jsx_runtime_1.jsxs)("h3", { className: currentStatus.reportsCount > 3.5 ? 'green' : 'red', children: ["There ", currentStatus.reportsCount === 1 ? 'is' : 'are', " ", currentStatus.reportsCount, " ", currentStatus.reportsCount === 1 ? 'report' : 'reports', " from ", currentStatus.editorsCount, " ", currentStatus.editorsCount === 1 ? 'editor' : 'editors', "."] }))] }));
}
