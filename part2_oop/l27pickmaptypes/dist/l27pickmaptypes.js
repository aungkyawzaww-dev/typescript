"use strict";
const productObj = {
    title: "Redbull",
};
const userObj = {
    name: "Bo Bo",
    age: 25,
};
function Employeefun(obj) {
    console.log(`${obj.name} = ${obj.position}`);
}
Employeefun({
    name: "Ko Ko",
    position: "Developer"
});
