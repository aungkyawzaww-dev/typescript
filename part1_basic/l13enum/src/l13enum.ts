// => Enum 

// Numeric Enum (default, auto-increment from 0)
// String Enum 

// Reverse Mapping ( only works with numeric enums )

// PascalCase (***)  နဲ့ပဲရေးပေးရမယ်

// camelCase 
// snake_case


enum ListFruits {
    Apple,
    Orange,
    Banana,
    Mango,
    Tomato
};

console.log(ListFruits); // if you want direct print! "const can't use"
console.log(ListFruits.Apple); // 0
console.log(ListFruits.Mango); // 3

// let , var can't in enum 

const enum ListNumbers {
    Apple = 10,
    Orange,
    Banana,
    Mango,
    Tomato = 100
};

let fruitnum1:ListNumbers = ListNumbers.Apple;
let fruitnum2:ListNumbers = ListNumbers.Mango;
let fruitnum3:ListNumbers = ListNumbers.Tomato;

console.log(fruitnum1); //  10
console.log(fruitnum2); //  13
console.log(fruitnum3); //  100

enum HttpCode {
    OK = 200,
    BadRequest = 400,
    Unauthrized = 401
};

console.log(HttpCode.OK);  // 200
console.log(HttpCode.BadRequest);  // 400
console.log(HttpCode.Unauthrized);  // 401

enum StaffInfo {
    Fullname = "Yamone",
    Position = "Manager"
};

let staffname:StaffInfo = StaffInfo.Fullname;
let staffposition:StaffInfo = StaffInfo.Position;

console.log(staffname,staffposition); // Yamone Manager

enum EmployeeDetails {
    ID = 1001,
    Name = "Yoon",
    Salary = 800000
}

let employeeid:EmployeeDetails = EmployeeDetails.ID;
let employeename:EmployeeDetails = EmployeeDetails.Name;
let employeesalary:EmployeeDetails = EmployeeDetails.Salary;

console.log(employeeid,employeename,employeesalary); // 1001 Yoon 800000


// Reverse Mapping ( only works with numeric enums )

enum Color {
    Red = 1,
    Green,
    BLue
}

console.log(Color[1]); // Red

enum Size {
    Small = 10,
    Medium = 13,
    Large = 17
}

console.log(Size[1]); // undefined
console.log(Size[13]);  // Medium 
console.log(Size[17]);  // Large 

// =>  Enum Merging , Ambient Enum 


enum Colour {
    Red = "Red",
    Green = "GREEN"
}

enum Colour {
    Blue = "Blue",
    Yellow = "Yellow"
}

console.log(Colour);
console.log(Colour.Green); // Green
console.log(Colour.Blue); // Blue

// => with Function 

enum Direction {
    Nort,
    South,
    East,
    West
};

function move(dict:Direction){
    console.log("You are moving to : ", dict);
}

move(Direction.East); // You are moving to :  2

enum Role {
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}

function getrole(role:Role) {
    console.log(`You are a ${role}`);
}

getrole(Role.User); // You are a USER


enum CarEngine {
    Stopped,
    Started
}

function isenginerunning(status:CarEngine):boolean{
    return status === CarEngine.Started;
    // return status === 1;
}

console.log(isenginerunning(CarEngine.Started)); // true
console.log(isenginerunning(CarEngine.Stopped)); // false

