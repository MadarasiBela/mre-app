"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MreApp;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./MreApp.css");
const BurgerMenu_1 = __importDefault(require("../Menu/BurgerMenu"));
// Importing pages
const RegisterPage_1 = __importDefault(require("../../pages/Register/RegisterPage"));
const LoginPage_1 = __importDefault(require("../../pages/Login/LoginPage"));
const NotesPage_1 = __importDefault(require("../../pages/Notes/NotesPage"));
const EditorPage_1 = __importDefault(require("../../pages/Editor/EditorPage"));
const WelcomePage_1 = __importDefault(require("../../pages/Welcome/WelcomePage"));
function MreApp() {
    const [page, setPage] = (0, react_1.useState)('Welcome');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mre-app", children: [(0, jsx_runtime_1.jsx)(BurgerMenu_1.default, { onNavigate: setPage }), (0, jsx_runtime_1.jsxs)("article", { children: [page === 'Welcome' && (0, jsx_runtime_1.jsx)(WelcomePage_1.default, {}), page === 'Register' && (0, jsx_runtime_1.jsx)(RegisterPage_1.default, { onNavigate: setPage }), page === 'Login' && (0, jsx_runtime_1.jsx)(LoginPage_1.default, { onNavigate: setPage }), page === 'Notes' && (0, jsx_runtime_1.jsx)(NotesPage_1.default, {}), page === 'Editor' && (0, jsx_runtime_1.jsx)(EditorPage_1.default, {})] })] }), (0, jsx_runtime_1.jsx)("footer", { className: "main-footer", children: "2025 \u00A9 MyReportEditor" })] }));
}
