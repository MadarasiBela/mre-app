"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./LoginPage.css");
const Title_1 = __importDefault(require("../../components/Title/Title"));
const CommonButton_1 = __importDefault(require("../../components/Button/CommonButton"));
require("../../components/Button/CommonButton.css");
function LoginPage() {
    const [userName, setUserName] = (0, react_1.useState)('');
    const validUsername = userName.trim().length > 0;
    const footerMessage = "Please login to access this App!";
    const footerExtra = "You can login with your username.";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Login" }), (0, jsx_runtime_1.jsxs)("div", { className: "centered-controls", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sign in to MRE" }), (0, jsx_runtime_1.jsxs)("div", { className: "input-row-1", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-1", children: "User name:" }), (0, jsx_runtime_1.jsx)("input", { id: "userName", maxLength: 256, type: "text", placeholder: "Enter your user name! eg: K\u00F3bor ", value: userName, onChange: e => setUserName(e.target.value) })] }), (0, jsx_runtime_1.jsx)(CommonButton_1.default, { disabled: !validUsername, children: "Login" })] })] }));
}
