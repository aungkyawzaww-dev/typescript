"use strict";
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showinfo() {
        console.log(`Name = ${this.name}, Age = ${this.age}, Role: ${this.getrole()}`);
    }
}
class Student extends People {
    constructor(name, age, grade) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getrole() {
        return "Student";
    }
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}
class Staff extends People {
    constructor(name, age, department) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.department = department;
    }
    getrole() {
        return "Staff";
    }
    work() {
        console.log(`${this.name} work in ${this.department} department.`);
    }
}
class Employee extends People {
    constructor(name, age, position, salary) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    getrole() {
        return "Employee";
    }
    study() {
        console.log(`${this.name} earns $${this.salary} as a ${this.position}.`);
    }
}
const studentObj = new Student("Kyaw Kyaw", 20, "Grade 11");
studentObj.showinfo();
studentObj.study();
const staffObj = new Staff("Tun Tun", 23, "IT");
staffObj.showinfo();
staffObj.work();
