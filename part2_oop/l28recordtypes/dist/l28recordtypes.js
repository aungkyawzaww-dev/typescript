"use strict";
const countryObj = {
    MM: "Myanmar",
    TH: "Thailand",
    SLK: "Srilanka"
};
console.log(countryObj.MM);
console.log(countryObj.TH);
const permissionObj = {
    admin: "full access",
    user: "limited access",
    guest: "read only",
};
console.log(permissionObj.admin);
console.log(permissionObj.user);
const userObj = {
    teacher: {
        name: "Mr.Tun Tun",
        age: 30
    },
    student: {
        name: "Ms.July",
        age: 18,
        email: "ms.july@gmail.com"
    }
};
console.log(userObj.teacher.name);
console.log(userObj.student.name);
console.log(userObj.student.email);
var Language;
(function (Language) {
    Language["Myanmar"] = "mm";
    Language["English"] = "en";
    Language["Thailand"] = "th";
})(Language || (Language = {}));
;
const greetingObj = {
    mm: "Mingalarpar",
    en: "Hello...",
    th: "Sawasdee",
};
console.log(greetingObj.mm);
console.log(greetingObj.th);
const calculateobj = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2
};
console.log(calculateobj.add(10, 20));
console.log(calculateobj.subtract(100, 20));
const inventoryObj = {
    Fruits: {
        Apple: 10,
        Orange: 50,
        Jelly: 0
    },
    Snacks: {
        Apple: 0,
        Orange: 0,
        Jelly: 100
    }
};
console.log(inventoryObj.Fruits.Apple);
console.log(inventoryObj.Snacks.Jelly);
