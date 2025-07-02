"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditorPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Title_1 = __importDefault(require("../../components/Title/Title"));
const Footer_1 = __importDefault(require("../../components/Footer/Footer"));
const EditorToolbar_1 = __importDefault(require("../../components/ToolBar/EditorToolbar"));
function EditorPage() {
    const [reportTitle, setReportTitle] = (0, react_1.useState)('');
    const footerMessage = "This is the Editor page footer. ";
    //  const footerExtra = new Date().toLocaleString();
    // The syntax is not usable here because `footerExtra` is declared as a constant (`const`), so you cannot reassign it.
    // Also, `footerExtra.concat("username")` returns a new string, it does not modify `footerExtra` in place.
    // If you want to append "username" to `footerExtra`, you should do it when you define it:
    const footerExtra = new Date().toLocaleString() + " Your username is: ... will be developed.";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Editor" }), (0, jsx_runtime_1.jsx)(EditorToolbar_1.default, { title: reportTitle, onTitleChange: (e) => setReportTitle(e.target.value), onBold: () => { }, onItalic: () => { }, onUnderline: () => { }, onSave: () => { }, onExport: () => { } }), (0, jsx_runtime_1.jsxs)("div", { className: "centered-controls", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "editor-field", children: "Report text:" }), (0, jsx_runtime_1.jsx)("textarea", { id: "editor-field", placeholder: "Write or edit your report here..." })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, { message: footerMessage, extra: footerExtra })] }));
}
