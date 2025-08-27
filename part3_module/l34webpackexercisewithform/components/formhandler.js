"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formData = void 0;
const formData = (form) => {
    const inputs = form.querySelectorAll("input");
    const values = {};
    inputs.forEach((input) => {
        const key = input.name || input.id;
        values[key] = input.value;
    });
    return values;
};
exports.formData = formData;
// 20FE 
