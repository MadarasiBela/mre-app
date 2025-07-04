"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditorPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Title_1 = __importDefault(require("../../components/Title/Title"));
const EditorToolbar_1 = __importDefault(require("../../components/ToolBar/EditorToolbar"));
function EditorPage() {
    const [reportTitle, setReportTitle] = (0, react_1.useState)('');
    const [reportText, setReportText] = (0, react_1.useState)('');
    // const footerExtra = new Date().toLocaleString() + " Your username is: ... will be developed.";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "editor-page", children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Editor" }), (0, jsx_runtime_1.jsx)(EditorToolbar_1.default, { title: reportTitle, onTitleChange: (e) => setReportTitle(e.target.value), onBold: () => { }, onItalic: () => { }, onUnderline: () => { }, onSave: () => { }, onExport: () => { } }), (0, jsx_runtime_1.jsx)("div", { className: "editor-field-container", children: (0, jsx_runtime_1.jsx)("textarea", { id: "editorField", className: "editor-field", placeholder: "Write your report here...", value: reportText, onChange: (e) => setReportText(e.target.value) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "some-footer" })] }));
}
