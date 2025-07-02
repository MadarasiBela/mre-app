"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BurgerMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./BurgerMenu.css");
function BurgerMenu({ onNavigate }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    const handleMenuClick = (page) => {
        setOpen(false);
        if (onNavigate)
            onNavigate(page);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "burger-menu-container", children: [(0, jsx_runtime_1.jsxs)("button", { className: "burger-icon", onClick: () => setOpen(!open), children: [(0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("span", {})] }), open && ((0, jsx_runtime_1.jsx)("nav", { className: "burger-dropdown", children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { onClick: () => handleMenuClick('Register'), children: "Register" }), (0, jsx_runtime_1.jsx)("li", { onClick: () => handleMenuClick('Login'), children: "Login" }), (0, jsx_runtime_1.jsx)("li", { onClick: () => handleMenuClick('Notes'), children: "Notes" }), (0, jsx_runtime_1.jsx)("li", { onClick: () => handleMenuClick('Editor'), children: "Editor" })] }) }))] }));
}
