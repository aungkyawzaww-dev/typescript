"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayhi() {
        console.log(`Hi My name is ${this.name}`);
    }
}
const personObj = new Person("Aung Aung");
personObj.sayhi();
class MathUtil {
    static square(num) {
        return num * num;
    }
}
console.log(MathUtil.square(2));
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I\m ${this.name} and I\m ${this.age} years old.`);
    }
    static isover18(age) {
        return age >= 18;
    }
}
const peopleObj = new People("Yoon Yoon", 19);
peopleObj.introduce();
console.log(People.isover18(20));
console.log(People.isover18(15));
class NumCounter {
    static increment() {
        NumCounter.count++;
    }
    static showresult() {
        console.log(`Total count is ${NumCounter.count}.`);
    }
}
NumCounter.count = 0;
NumCounter.showresult();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.showresult();
class Staff {
    constructor(name) {
        Staff.totalstaff++;
    }
    static showtotal() {
        console.log(`Total staff = ${Staff.totalstaff}`);
    }
}
Staff.totalstaff = 0;
const staffObj1 = new Staff("Su Su");
const staffObj2 = new Staff("Nu Nu");
Staff.showtotal();
