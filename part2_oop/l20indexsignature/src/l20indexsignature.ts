// Syntax 

// class MyClass{
//     [key:string]:string;
// }

class Staff {
    [info:string]:boolean;
}

const staffoneObj = new Staff();
console.log(staffoneObj);  // Staff {}

staffoneObj.hasnrc = true;
staffoneObj.hascar = false;
console.log(staffoneObj); //Staff { hasnrc: true, hascar: false }

const stafftwoObj = new Staff();
console.log(stafftwoObj);   // Staff {}

stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.hasgirlfriend = false;
console.log(stafftwoObj); //Staff { hasnrc: true, hascar: false, hasgirlfriend: false }

class People {
    [key:string]:string;

    name:string = "Maung Maung";
    email:string = "maungmaung@gmail.com";
}

const peopleObj = new People();
console.log(peopleObj); // People { name: 'Maung Maung', email: 'maungmaung@gmail.com' }

peopleObj.city = "Mandalay";
console.log(peopleObj); // People { name: 'Maung Maung', email: 'maungmaung@gmail.com', city = 'Mandalay' } 
console.log(peopleObj.city); // Mandalay


// Exercise

class Employee {
    [key:string]:string|boolean;

    name:string = "Yu Yu";
}

const employeeObj = new Employee();

console.log(employeeObj); //Employee { name: 'Yu Yu' }

// add dynamic properties
employeeObj.hasnrc = true;
employeeObj.hascar = false;
employeeObj.department = "IT Department";

console.log(employeeObj);

console.log(employeeObj.name); // Yu Yu
console.log(employeeObj.hasnrc); // true
console.log(employeeObj.department); // IT Department

// 11ID 