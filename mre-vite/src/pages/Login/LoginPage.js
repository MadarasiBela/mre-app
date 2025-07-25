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
exports.default = LoginPage;
const jsx_runtime_1 = require("react/jsx-runtime");
// import React, { useState } from 'react';
require("./LoginPage.css");
const Title_1 = __importDefault(require("../../components/Title/Title"));
const CommonButton_1 = __importDefault(require("../../components/Button/CommonButton"));
require("../../components/Button/CommonButton.css");
const react_1 = require("react");
function LoginPage({ onNavigate }) {
    const [userName, setUserName] = (0, react_1.useState)('');
    const validUsername = userName.trim().length > 0 && userName.trim().length < 256;
    const [error, setError] = (0, react_1.useState)(null);
    // const navigate = useNavigate();
    // const apiUrl = import.meta.env.VITE_API_URL || '/api';
    const apiUrl = '/api'; // For local development
    const handleLogin = () => __awaiter(this, void 0, void 0, function* () {
        setError(null); // delete any previous error message
        if (!validUsername) {
            setError("User name is required!");
            return;
        }
        try {
            console.log("Logging in user:", { userName });
            const response = yield loginUser(userName, apiUrl);
            if (response.success) {
                onNavigate('/notes');
            }
            else {
                setError(response.message || "Login failed!");
            }
        }
        catch (err) {
            setError("Network or server error: " + (err.message || err));
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: "Login" }), (0, jsx_runtime_1.jsxs)("div", { className: "centered-controls", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sign in to MRE" }), (0, jsx_runtime_1.jsxs)("div", { className: "input-row-1", children: [(0, jsx_runtime_1.jsx)("label", { className: "highlight-label-1", children: "User name:" }), (0, jsx_runtime_1.jsx)("input", { id: "userName", maxLength: 256, type: "text", placeholder: "Enter your user name! eg: K\u00F3bor ", value: userName, onChange: e => setUserName(e.target.value) })] }), (0, jsx_runtime_1.jsx)(CommonButton_1.default, { disabled: !validUsername, onClick: handleLogin, children: "Login" }), error && (0, jsx_runtime_1.jsx)("div", { className: "error-message", children: error })] })] }));
}
function loginUser(userName, apiUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Sending fetch to:", `${apiUrl}/api/login`);
        console.log("Payload:", { userName });
        const response = yield fetch(`${apiUrl}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName }),
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
