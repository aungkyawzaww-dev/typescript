"use strict";
class NumberStore {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
numberstoreObj.add(20);
console.log(numberstoreObj.getdatas());
class Store {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const storeObj1 = new Store();
storeObj1.add(10);
storeObj1.add(20);
console.log(storeObj1.getdatas());
const storeObj2 = new Store();
storeObj2.add("ni ni");
storeObj2.add("aye aye");
console.log(storeObj2.getdatas());
const storeObj3 = new Store();
storeObj3.add(true);
storeObj3.add(false);
console.log(storeObj3.getdatas());
class Student {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const studeentObj = new Student("Nilar", 19, "Yangon");
console.log(studeentObj);
const studeentObj2 = new Student("Muyar", "19 years old", "Yangon");
console.log(studeentObj2);
class Storages {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas(id) {
        return this.datas.find(singleData => singleData.id === id);
    }
}
const storagesObj = new Storages();
storagesObj.add({ id: 1, name: "Kyaw Kyaw" });
storagesObj.add({ id: 2, name: "Mg Mg" });
storagesObj.add({ id: 3, name: "Nu Nu" });
console.log(storagesObj.getdatas(3));
