"use strict";
let colorregarrs = ["red", "green", "blue"];
let numregarrs = [10, 20, 30];
let mixregarrs = [100, 200, 300, "red", "green", "blue", true, false];
let greetregarrs = [["hi"], ["hello", "hay"], ["hifi", "zoho"]];
let evennumsregarrs = [[2, 4], [6, 8], [10, 12]];
let inforegarrs = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ["hascar", false]];
const productdetails = ["Redbull", 2500];
console.log(productdetails);
let numbers = [1, 2, [30, 40]];
console.log(numbers);
let colorgenarrs = ["red", "green", "blue"];
console.log(colorgenarrs);
let numgenarrs = [10, 20];
let boolgenarrs = [true, false];
let mingenarrs = [100, 200, 300, true, "red", "green", false, "blue"];
console.log(mingenarrs);
let evengenarrs = [[1, 2], [3, 4], [5, 6]];
console.log(evengenarrs);
let mixgenarrs = [[1, 2], ["red", "green", "blue"], [true, "brown", false], ["hobby", "reading", "sport"]];
console.log(mixgenarrs);
function mygenfun(arrs) {
    return arrs[0];
}
console.log(mygenfun(["red", "green", "blue"]));
console.log(mygenfun([10, 20, 30]));
function genfunone(value) {
    return value;
}
console.log(genfunone("hello"));
console.log(genfunone(1500));
console.log(genfunone(false));
console.log(genfunone("hello"));
console.log(genfunone(1500));
console.log(genfunone(true));
function genfunthree(val) {
    return val[2];
}
let strresult = genfunthree(["aung aung", "maung maung", "tun tun", "kyaw kyaw"]);
console.log(strresult);
let numresult = genfunthree([10, 20, 30, 40]);
console.log(numresult);
let boolresult = genfunthree([true, false, true, false]);
console.log(boolresult);
function genfunfour(val1, val2) {
    return [val1, val2];
}
console.log(genfunfour("Hsu Hsu", 28));
console.log(genfunfour("has car", true));
function genfunfive(value) {
    return value;
}
console.log(genfunfive(""));
console.log(genfunfive("Hello"));
console.log(genfunfive(100));
console.log(typeof genfunfive(100));
console.log(genfunfive(true));
console.log(typeof genfunfive(true));
const Article = {
    title: "Article 1",
    content: "This is the story of articlel 1",
    price: "20 USD"
};
const Post = {
    title: 2,
    content: 2,
    price: 20
};
console.log(Article);
const item = {
    name: "Redbull",
    price: 2500
};
console.log(item);
const item2 = {
    name: "Sponsor",
    price: "FOC"
};
console.log(item2);
const student = {
    name: "Su Su",
    gender: "Female",
    age: 25
};
let myset = new Set([10, 20, 30, 10, 20]);
console.log(myset);
console.log(myset.size);
console.log(myset.has(20));
console.log(myset.has(70));
let numberset = new Set([1, 2, 3, 13]);
console.log(numberset);
let nameset = new Set(["aung aung", "maung maung", "tun tun"]);
console.log(nameset);
let mixeddatas = new Set([1, "2", "Three"]);
console.log(mixeddatas);
const numset = new Set();
console.log(numset);
numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);
console.log(numset);
console.log(numset.has(2));
numset.delete(2);
console.log(numset);
numset.clear();
console.log(numset);
const colorset = new Set(["Red", "Green", "Blue", "Orange", "Black"]);
console.log(colorset);
for (let color of colorset) {
    console.log(color);
}
colorset.forEach((color) => {
    console.log(color);
});
const userset = new Set([
    { id: 1, name: "Hsu Hsu", age: 20 },
    { id: 2, name: "Nu Nu", age: 18 },
    { id: 3, name: "Yu Yu", age: 15 },
]);
userset.add({ id: 4, name: "Hla Hla", age: 16 });
console.log(userset);
