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
// Update the import path if RegisterPage is located elsewhere, for example:
// import RegisterPage from '../pages/Register/RegisterPage';
const RegisterPage_1 = __importDefault(require("../../pages/Register/RegisterPage"));
// Or, if the file does not exist, create src/components/pages/Register/RegisterPage.tsx with a default export component.
const LoginPage_1 = __importDefault(require("../../pages/Login/LoginPage"));
const NotesPage_1 = __importDefault(require("../../pages/Notes/NotesPage"));
const EditorPage_1 = __importDefault(require("../../pages/Editor/EditorPage"));
// import EditorToolbar from '../../components/ToolBar/EditorToolbar';
function MreApp() {
    const [page, setPage] = (0, react_1.useState)('welcome');
    // const [reportTitle, setReportTitle] = useState('');
    // let footerMessage = 'This is a common footer message on each MRE page.'
    // let footerExtra = '';
    // const footerMessage = "This is a common footer message on each MRE page.";
    // const footerExtra = "This is an extra message that can be used on specific pages.";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mre-app", children: [(0, jsx_runtime_1.jsx)(BurgerMenu_1.default, { onNavigate: setPage }), (0, jsx_runtime_1.jsxs)("article", { children: [page === 'welcome' && ((0, jsx_runtime_1.jsxs)("div", { className: "welcome-page", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome to the Medical Record Editor (MRE) App!" }), (0, jsx_runtime_1.jsx)("p", { children: "Please select a menu item to get started." }), (0, jsx_runtime_1.jsxs)("p", { children: ["If you have already been registereed select ", (0, jsx_runtime_1.jsx)("strong", { children: "Login" }), " "] }), (0, jsx_runtime_1.jsxs)("p", { children: ["else select ", (0, jsx_runtime_1.jsx)("strong", { children: "Register" }), "!"] })] })), page === 'Register' && (0, jsx_runtime_1.jsx)(RegisterPage_1.default, {}), page === 'Login' && (0, jsx_runtime_1.jsx)(LoginPage_1.default, {}), page === 'Notes' && (0, jsx_runtime_1.jsx)(NotesPage_1.default, {}), page === 'Editor' && (0, jsx_runtime_1.jsx)(EditorPage_1.default, {})] })] }), (0, jsx_runtime_1.jsx)("footer", { className: "main-footer", children: "2025 \u00A9 MyReportEditor" })] }));
}
