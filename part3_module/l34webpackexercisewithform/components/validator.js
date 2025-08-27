"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
const validateForm = (data, schema) => {
    const errors = {};
    for (const field in schema) {
        const rules = schema[field];
        const value = data[field] ? data[field].trim() : "";
        if (rules.required && !value) {
            errors[field] = `${field} is required`;
        }
        if (rules.minLength && value.length < rules.minLength) {
            errors[field] = `${field} must be at least ${rules.minLength} characters`;
        }
        if (rules.maxLength && value.length > rules.maxLength) {
            errors[field] = `${field} must be less than ${rules.maxLength} characters`;
        }
        if (rules.type == "email") {
            if (!value.includes("@") || !value.includes(".")) {
                errors[field] = `${field} must be a valid email`;
            }
        }
        if (rules.type == "number") {
            if (isNaN(Number(value))) {
                errors[field] = `${field} must be a number`;
            }
        }
    }
    return errors;
};
exports.validateForm = validateForm;
