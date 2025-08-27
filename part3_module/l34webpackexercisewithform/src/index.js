"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const formhandler_1 = require("../components/formhandler");
const validator_1 = require("../components/validator");
// // method 1
// const form = document.querySelector("form");
// if(form){
//     form.addEventListener("submit",(e)=>{
//         e.preventDefault();
//         console.log("Hello");
//     });
// }
// // method 2
// const form = document.querySelector("form")!; // trust me. i'm sure this won't be null at runtime
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("Hello");
// });
// method 3
// const form = document.querySelector("form"); 
// form?.addEventListener("submit",(e)=>{ // trust me. i'm sure this won't be null at runtime
//     e.preventDefault();
//     console.log("Hello");
// });
// method 4
const form = document.querySelector("form");
const schema = {
    name: { required: true, minLength: 3, maxLength: 5 },
    email: { required: true, type: "email" },
    age: { required: true, type: "number" }
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form)
        return; //safety guard
    const datas = (0, formhandler_1.formData)(form);
    // console.log("Form Data :",datas);
    const errors = (0, validator_1.validateForm)(datas, schema);
    if (Object.keys(errors).length > 0) {
        console.error("Validation Error : ", errors);
        showErrors(errors);
    }
    else {
        console.log("Form Data : ", datas);
        // clear all previous errors div
        document.querySelectorAll(".error").forEach(errdiv => errdiv.remove());
        alert("Form submitted successfully");
        form.reset();
    }
});
function showErrors(errors) {
    // clear all previous errors div
    document.querySelectorAll(".error").forEach(errdiv => errdiv.remove());
    for (const field in errors) {
        const input = document.querySelector(`#${field}`);
        if (input) {
            const errEl = document.createElement("div");
            errEl.className = "error";
            errEl.style.color = "red";
            errEl.style.fontSize = "12px";
            errEl.textContent = errors[field];
            input.insertAdjacentElement("afterend", errEl);
        }
    }
}
// 27VD 
