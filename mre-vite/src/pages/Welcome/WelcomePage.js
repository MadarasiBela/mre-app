"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WelcomePage;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./WelcomePage.css");
function WelcomePage() {
    var hasUserBeenShown = false;
    if (hasUserBeenShown) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "welcome-page" }));
    }
    else {
        hasUserBeenShown = true;
        return ((0, jsx_runtime_1.jsxs)("div", { className: "welcome-page", children: [(0, jsx_runtime_1.jsx)("h2", { children: "Welcome to the Medical Record Editor (MRE) App!" }), (0, jsx_runtime_1.jsx)("p", { children: "Please select a menu item to get started." }), (0, jsx_runtime_1.jsxs)("p", { children: ["If you have already been registered select ", (0, jsx_runtime_1.jsx)("strong", { children: "Login" }), " "] }), (0, jsx_runtime_1.jsxs)("p", { children: ["else select ", (0, jsx_runtime_1.jsx)("strong", { children: "Register" }), "!"] })] }));
    }
}
