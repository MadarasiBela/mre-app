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
const react_router_dom_1 = require("react-router-dom");
function RegisterPage(props) {
    const [userName, setUserName] = (0, react_1.useState)('');
    const [fullName, setFullName] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const footerMessage: string = "This is the Register page specific footer. Please register to use the MRE App!";
    // const footerExtra: string = "Only 256 characters. User name and full name are required.";
    const isValid = userName.trim().length > 0 && fullName.trim().length > 0;
    const handleRegister = () => __awaiter(this, void 0, void 0, function* () {
        // Itt hívod meg a szervizt (pl. fetch vagy axios)
        const response = yield registerUser(userName, fullName);
        if (response.success) {
            // Navigáció a NotesPage-re
            navigate('/notes');
        }
        else {
            // Hibakezelés
            alert("Sikertelen regisztráció!");
        }
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "register-page", children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Register" }), (0, jsx_runtime_1.jsxs)("div", { className: "centered-controls", children: [(0, jsx_runtime_1.jsxs)("div", { className: "input-row-1", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-1", children: "User name:" }), (0, jsx_runtime_1.jsx)("input", { id: "userName", maxLength: 256, type: "text", placeholder: "User name eg: K\u00F3bor ", value: userName, onChange: (e) => setUserName(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "input-row-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-2", children: "Full name:" }), (0, jsx_runtime_1.jsx)("input", { id: "fullName", maxLength: 256, type: "text", placeholder: "Full name eg: K\u00F3bor J\u00E1nos", value: fullName, onChange: (e) => setFullName(e.target.value) })] }), (0, jsx_runtime_1.jsx)(CommonButton_1.default, { disabled: !isValid, onClick: handleRegister, children: "OK" })] })] }) }));
}
function registerUser(userName, fullName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, fullName }),
        });
        return response.json();
    });
}
