"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotesPage;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./NotesPage.css");
const Title_1 = __importDefault(require("../../components/Title/Title"));
// import CommonButton from './CommonButton';
// import Footer from '../../components/Footer/Footer';
function NotesPage() {
    const footerMessage = "Here you can find your notes.";
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "notes-page", children: [(0, jsx_runtime_1.jsx)("div", { className: "notes-header", children: (0, jsx_runtime_1.jsx)(Title_1.default, { title: " My Notes" }) }), (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "notes-hint-row", children: [(0, jsx_runtime_1.jsx)("p", { className: "notes-hint", children: "For a new Note click + !" }), (0, jsx_runtime_1.jsx)("button", { className: "add-note-btn", children: "+" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "notes-list", children: [(0, jsx_runtime_1.jsx)("div", { className: "note-item", children: "..." }), (0, jsx_runtime_1.jsx)("div", { className: "note-item", children: "..." }), (0, jsx_runtime_1.jsx)("div", { className: "note-item", children: "..." })] })] })] }) }));
}
