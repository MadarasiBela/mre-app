"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import { StrictMode } from 'react'
const client_1 = require("react-dom/client");
// import { BrowserRouter } from 'react-router-dom';
require("./index.css");
// import App from './App'
const MreApp_1 = __importDefault(require("./components/Application/MreApp"));
(0, client_1.createRoot)(document.getElementById('root')).render(
// <StrictMode>
//   <BrowserRouter>
(0, jsx_runtime_1.jsx)(MreApp_1.default, {})
//   </BrowserRouter>
// </StrictMode>,
);
