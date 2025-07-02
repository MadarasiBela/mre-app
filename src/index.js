"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const MreApp_1 = __importDefault(require("./components/Application/MreApp"));
require("./index.css"); // Assuming you have some global styles in index.css
const root = client_1.default.createRoot(document.getElementById('app'));
root.render((0, jsx_runtime_1.jsx)(MreApp_1.default, {}));
(0, jsx_runtime_1.jsx)("div", { id: "app" });
