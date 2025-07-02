"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MreApp;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./MreApp.css");
const BurgerMenu_1 = __importDefault(require("../../components/Menu/BurgerMenu"));
const Footer_1 = __importDefault(require("../../components/Footer/Footer"));
// Importing pages
const RegisterPage_1 = __importDefault(require("../../pages/Register/RegisterPage"));
const LoginPage_1 = __importDefault(require("../../pages/Login/LoginPage"));
const NotesPage_1 = __importDefault(require("../../pages/Notes/NotesPage"));
const EditorPage_1 = __importDefault(require("../../pages/Editor/EditorPage"));
function MreApp() {
    const [page, setPage] = (0, react_1.useState)('welcome');
    // const [reportTitle, setReportTitle] = useState('');
    let footerMessage = 'This is a common footer message on each MRE page.';
    let footerExtra = '';
    // if (page === RegisterPage) {
    //   footerExtra = (
    //     <div className="footer-extra">
    //       Support: <br /> Tel: +1 301 400 500 600, <br /> e-mail: customer.service@mre.com<br />
    //       Privacy: link todo<br />
    //       Terms of use: link todo<br />
    //       License: link todo<br />
    //       Copy Right: xyz Kft.
    //     </div>
    //   );
    // } else if (page === LoginPage) {
    //   footerExtra = (
    //     <div className="footer-extra">
    //       Enter your username and password!
    //       <br />
    //       <span>Any extra text for LogIn.</span>
    //     </div>
    //   );
    // } else if (page === NotesPage) {
    //   footerExtra = (
    //     <div className="footer-extra">
    //       You can search through completed reports here.
    //     <br />
    //       <span>Any extra text for Search.</span>
    //     </div>
    //   );
    // } else if (page === EditorPage) {
    //   footerExtra = (
    //     <div className="footer-extra">
    //       This is the report editing page. Here you can edit the selected report or write a new report.
    //       <br />
    //       <span>Any extra text for Edit.</span>
    //     </div>
    //   );
    // }
    return (
    // <DebugClassName className="mre-app">
    (0, jsx_runtime_1.jsxs)("div", { className: "mre-app", children: [(0, jsx_runtime_1.jsx)(BurgerMenu_1.default, { onNavigate: setPage }), (0, jsx_runtime_1.jsxs)("article", { children: [page === 'welcome' && ((0, jsx_runtime_1.jsxs)("div", { className: "welcome-page", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome to the Medical Record Editor (MRE) App!" }), (0, jsx_runtime_1.jsx)("p", { children: "Please select a menu item to get started." }), (0, jsx_runtime_1.jsxs)("p", { children: ["If you have already been registereed select ", (0, jsx_runtime_1.jsx)("strong", { children: "Login" }), " "] }), (0, jsx_runtime_1.jsxs)("p", { children: ["else select ", (0, jsx_runtime_1.jsx)("strong", { children: "Register" }), "!"] })] })), page === 'Register' && (0, jsx_runtime_1.jsx)(RegisterPage_1.default, {}), page === 'Login' && (0, jsx_runtime_1.jsx)(LoginPage_1.default, {}), page === 'Notes' && (0, jsx_runtime_1.jsx)(NotesPage_1.default, {}), page === 'Editor' && (0, jsx_runtime_1.jsx)(EditorPage_1.default, {})] }), (0, jsx_runtime_1.jsx)(Footer_1.default, { message: footerMessage, extra: footerExtra })] })
    // </DebugClassName>
    );
}
