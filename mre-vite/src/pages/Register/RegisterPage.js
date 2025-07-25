"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const cleaningHtml_1 = __importDefault(require("../../utils/cleaningHtml"));
require("../../components/Button/CommonButton.css");
function RegisterPage({ onNavigate }) {
    const [userName, setUserName] = (0, react_1.useState)('');
    const [fullName, setFullName] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)(null);
    const validUserName = userName.trim().length > 0 && userName.trim().length < 256;
    const validFullName = fullName.trim().length > 0 && fullName.trim().length < 256;
    // const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const apiUrl = '/api';
    const handleRegister = () => __awaiter(this, void 0, void 0, function* () {
        setError(null); // delete any previous error message
        if (!validUserName || !validFullName) {
            setError("Both user name and full name are required!");
            return;
        }
        else if (userName.trim().length < 1 || fullName.trim().length < 1) {
            setError("Both user name and full name must be at least 1 character long!");
            return;
        }
        else if (userName.trim().length > 255 || fullName.trim().length > 255) {
            setError("Both user name and full name must be less than 256 characters long!");
            return;
        }
        try {
            console.log("Registering user:", { userName, fullName, apiUrl });
            const response = yield registerUser(userName, fullName, apiUrl);
            if (response && response.success) {
                console.log(`Response is: ${response.success}`);
                console.log(`Navigating to LoginPage.`);
                // navigate('/Login');
                onNavigate('Login');
            }
            else {
                console.log(`Response is: ${response.success}`);
                setError(response.message || "Erroneous registration failed!");
            }
        }
        catch (err) {
            setError("Network or server error: " + (err.message || err));
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "register-page", children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Register" }), (0, jsx_runtime_1.jsxs)("div", { className: "centered-controls", children: [(0, jsx_runtime_1.jsxs)("div", { className: "input-row-1", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-1", children: "User name:" }), (0, jsx_runtime_1.jsx)("input", { id: "userName", maxLength: 256, type: "text", placeholder: "User name eg: K\u00F3bor ", value: userName, onChange: (e) => setUserName((0, cleaningHtml_1.default)(e.target.value)) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "input-row-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-2", children: "Full name:" }), (0, jsx_runtime_1.jsx)("input", { id: "fullName", maxLength: 256, type: "text", placeholder: "Full name eg: K\u00F3bor J\u00E1nos", value: fullName, onChange: (e) => setFullName((0, cleaningHtml_1.default)(e.target.value)) })] }), (0, jsx_runtime_1.jsx)(CommonButton_1.default, { disabled: !validUserName || !validFullName, onClick: handleRegister, children: "OK" }), error && (0, jsx_runtime_1.jsx)("div", { className: "error-message", children: error })] })] }));
}
function registerUser(userName, fullName, apiUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Sending fetch to:", `${apiUrl}/api/register`);
        console.log("Payload:", { userName, fullName });
        const response = yield fetch(`${apiUrl}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, fullName }),
        });
        console.log("Fetch response status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = yield response.json();
        console.log("Fetch response data:", data);
        return data;
    });
}
