"use strict";
class Staff {
}
const staffoneObj = new Staff();
console.log(staffoneObj);
staffoneObj.hasnrc = true;
staffoneObj.hascar = false;
console.log(staffoneObj);
const stafftwoObj = new Staff();
console.log(stafftwoObj);
stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.hasgirlfriend = false;
console.log(stafftwoObj);
class People {
    constructor() {
        this.name = "Maung Maung";
        this.email = "maungmaung@gmail.com";
    }
}
const peopleObj = new People();
console.log(peopleObj);
peopleObj.city = "Mandalay";
console.log(peopleObj);
console.log(peopleObj.city);
class Employee {
    constructor() {
        this.name = "Yu Yu";
    }
}
const employeeObj = new Employee();
console.log(employeeObj);
employeeObj.hasnrc = true;
employeeObj.hascar = false;
employeeObj.department = "IT Department";
console.log(employeeObj);
console.log(employeeObj.name);
console.log(employeeObj.hasnrc);
console.log(employeeObj.department);
