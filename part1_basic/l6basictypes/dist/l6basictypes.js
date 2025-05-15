"use strict";
let country;
console.log(country);
let brandname = "";
let phone = (brand) => {
    brandname = brand;
};
console.log(phone("iPhone"));
console.log(brandname);
let points;
function userpoints(cashdown) {
    if (cashdown) {
        return points = 100;
    }
    else {
        return points = 0;
    }
}
let user1 = userpoints(true);
let user2 = userpoints(false);
console.log(user1);
console.log(user2);
let age1 = undefined;
let age5 = null;
let age6 = 25;
let age7 = "Hay";
console.log(age1);
console.log(age5);
console.log(age6);
console.log(age7);
let cashback = 1000;
cashback = 500;
console.log(cashback);
let cashreturn = 2000;
console.log(cashreturn);
const price = 700;
console.log(price);
const itemprice = 300;
console.log(itemprice);
const newcourse = "vdo";
console.log(newcourse);
const student = {
    name: "Aung Aung",
    gender: "Male",
    age: 20
};
console.log(student);
let numberarrs = [10, 20, [30, 40, [500, 600]]];
console.log(numberarrs);
const officestaff = {
    id: 1001,
    name: "Yu Yu",
    department: "Accounting"
};
console.log(officestaff);
console.log(typeof officestaff);
const newstaff = JSON.stringify(officestaff);
console.log(newstaff);
console.log(typeof newstaff);
function staffinfo(newstaffjson) {
    return JSON.parse(newstaffjson);
}
console.log(staffinfo(newstaff));
console.log(typeof staffinfo(newstaff));
console.log(staffinfo(newstaff).id);
console.log(staffinfo(newstaff).name);
console.log(staffinfo(newstaff).department);
let luckynumber = "777";
console.log(luckynumber);
function userinof(name, age) {
    console.log(`My name is ${name}. i am ${age} years old.`);
}
userinof("Tun Tun", "20");
function getinput(val) {
    if (typeof val == "string") {
        return val.toUpperCase();
    }
    else {
        return val * 2;
    }
}
console.log(getinput("hi"));
console.log(getinput(20));
let dinner = (amount, serviefee) => {
    if (typeof serviefee == "number") {
        return amount + serviefee;
    }
    else {
        return amount + parseInt(serviefee);
    }
};
console.log(dinner(3000, 500));
console.log(dinner(3000, "200"));
console.log(dinner(3000, "100 usd"));
let lunch = (amount, serviefee) => {
    if (typeof serviefee == "number") {
        return amount + serviefee;
    }
    else {
        return amount + parseInt(serviefee);
    }
};
console.log(lunch(3000, 500));
console.log(lunch(3000, 100));
const desktop = {
    brand: "MSI",
    price: 800,
    cpu: "Intel Core I9",
    coolingfun: false
};
console.log(desktop);
const laptop = {
    brand: "MSI",
    price: 800,
};
laptop.price = 1000;
console.log(laptop);
const newperson = {
    uid: 1001,
    name: "Tun Tun",
    age: 20,
    department: "IT"
};
console.log(newperson);
function printPersonInfo(obj) {
    console.log(`ID is ${obj.uid}, Name is ${obj.name} , Age is ${obj.age} and Department is ${obj.department}`);
}
printPersonInfo(newperson);
const nextjsClass = {
    id: 1002,
    title: "nextJs Class",
    price: 400,
    type: "VdoClass",
    content() {
    },
    cloudprovider() {
    },
    paymentgateway() {
    }
};
console.log(nextjsClass);
function greet(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("Hnin Mya", 20));
console.log(greet("Hnin Hnin"));
function greeting(name, age) {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I am ${age} years old.`;
    }
    else {
        return `Hello, my name is ${name}.`;
    }
}
console.log(greeting("Kaung Kaung", 20));
console.log(greeting("Nyaung Nyaung"));
let sayhi;
sayhi = (msg) => {
    return msg;
};
console.log(sayhi("Mingalar Par"));
let sayhello;
sayhello = (msg, name, content = "What are you doing.") => {
    if (name !== undefined) {
        return `Hello ${msg}!, ${name}. ${content}`;
    }
    else {
        return `Hello ${msg}!, ${content}`;
    }
};
console.log(sayhello("Min Ga Lar Par", "Muyar", "How are you?"));
console.log(sayhello("Min Ga Lar Par"));
const vipcu = {
    name: "U Hla",
    phone: "0912345",
    address: {
        street: "123 Main St",
        city: "Mandalay",
        country: "Myanmar"
    }
};
console.log(vipcu);
function employer(owner) {
    return owner.fullname;
}
console.log(employer({ fullname: "Mon Mon" }));
function lawyer({ fullname }) {
    return fullname;
}
console.log(lawyer({ fullname: "U Ba" }));
const Animal = {
    name: "Panda",
    age: 7
};
let petone = {
    name: "Cute cat",
    age: 10
};
console.log(petone);
