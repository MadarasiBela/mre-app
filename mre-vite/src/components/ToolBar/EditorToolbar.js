"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditorToolbar;
const jsx_runtime_1 = require("react/jsx-runtime");
function EditorToolbar({ title, onTitleChange, onBold, onItalic, onUnderline, onSave, onExport }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "editor-toolbar", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", maxLength: 256, placeholder: "Report title", value: title, onChange: onTitleChange, className: "report-title-input" }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onBold, children: (0, jsx_runtime_1.jsx)("b", { children: "B" }) }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onItalic, children: (0, jsx_runtime_1.jsx)("i", { children: "I" }) }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onUnderline, children: (0, jsx_runtime_1.jsx)("u", { children: "U" }) }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onSave, children: "Save" }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onExport, children: "Export PDF" })] }));
}
