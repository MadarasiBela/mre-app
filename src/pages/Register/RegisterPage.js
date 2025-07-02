"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./RegisterPage.css");
const Title_1 = __importDefault(require("../../components/Title/Title"));
const CommonButton_1 = __importDefault(require("../../components/Button/CommonButton"));
const Footer_1 = __importDefault(require("../../components/Footer/Footer"));
function RegisterPage() {
    const [userName, setUserName] = (0, react_1.useState)('');
    const [fullName, setFullName] = (0, react_1.useState)('');
    const footerMessage = "This is the Register page specific footer. Please register to use the MRE App!";
    const footerExtra = "Only 256 characters. User name and full name are required.";
    const isValid = userName.trim().length > 0
        && fullName.trim().length > 0;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "register-page", children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Register" }), (0, jsx_runtime_1.jsxs)("div", { className: "centered-controls", children: [(0, jsx_runtime_1.jsxs)("div", { className: "input-row-1", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-1", children: "User name:" }), (0, jsx_runtime_1.jsx)("input", { id: "userName", maxLength: 256, type: "text", placeholder: "Enter user name eg: K\u00F3bor ", value: userName, onChange: (e) => setUserName(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "input-row-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-2", children: "Full name:" }), (0, jsx_runtime_1.jsx)("input", { id: "fullName", maxLength: 256, type: "text", placeholder: "Enter your full name.", value: fullName, onChange: (e) => setFullName(e.target.value) })] }), (0, jsx_runtime_1.jsx)(CommonButton_1.default, { disabled: !isValid, children: "OK" })] })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, { message: footerMessage, extra: footerExtra })] }));
}
