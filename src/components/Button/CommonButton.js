"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommonButton;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./CommonButton.css");
function CommonButton(_a) {
    var { children = "OK" } = _a, props = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ className: "app-button" }, props, { children: children })));
}
