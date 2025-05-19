"use strict";
var ListFruits;
(function (ListFruits) {
    ListFruits[ListFruits["Apple"] = 0] = "Apple";
    ListFruits[ListFruits["Orange"] = 1] = "Orange";
    ListFruits[ListFruits["Banana"] = 2] = "Banana";
    ListFruits[ListFruits["Mango"] = 3] = "Mango";
    ListFruits[ListFruits["Tomato"] = 4] = "Tomato";
})(ListFruits || (ListFruits = {}));
;
console.log(ListFruits);
console.log(ListFruits.Apple);
console.log(ListFruits.Mango);
;
let fruitnum1 = 10;
let fruitnum2 = 13;
let fruitnum3 = 100;
console.log(fruitnum1);
console.log(fruitnum2);
console.log(fruitnum3);
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Unauthrized"] = 401] = "Unauthrized";
})(HttpCode || (HttpCode = {}));
;
console.log(HttpCode.OK);
console.log(HttpCode.BadRequest);
console.log(HttpCode.Unauthrized);
var StaffInfo;
(function (StaffInfo) {
    StaffInfo["Fullname"] = "Yamone";
    StaffInfo["Position"] = "Manager";
})(StaffInfo || (StaffInfo = {}));
;
let staffname = StaffInfo.Fullname;
let staffposition = StaffInfo.Position;
console.log(staffname, staffposition);
var EmployeeDetails;
(function (EmployeeDetails) {
    EmployeeDetails[EmployeeDetails["ID"] = 1001] = "ID";
    EmployeeDetails["Name"] = "Yoon";
    EmployeeDetails[EmployeeDetails["Salary"] = 800000] = "Salary";
})(EmployeeDetails || (EmployeeDetails = {}));
let employeeid = EmployeeDetails.ID;
let employeename = EmployeeDetails.Name;
let employeesalary = EmployeeDetails.Salary;
console.log(employeeid, employeename, employeesalary);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["BLue"] = 3] = "BLue";
})(Color || (Color = {}));
console.log(Color[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 13] = "Medium";
    Size[Size["Large"] = 17] = "Large";
})(Size || (Size = {}));
console.log(Size[1]);
console.log(Size[13]);
console.log(Size[17]);
var Colour;
(function (Colour) {
    Colour["Red"] = "Red";
    Colour["Green"] = "GREEN";
})(Colour || (Colour = {}));
(function (Colour) {
    Colour["Blue"] = "Blue";
    Colour["Yellow"] = "Yellow";
})(Colour || (Colour = {}));
console.log(Colour);
console.log(Colour.Green);
console.log(Colour.Blue);
var Direction;
(function (Direction) {
    Direction[Direction["Nort"] = 0] = "Nort";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
;
function move(dict) {
    console.log("You are moving to : ", dict);
}
move(Direction.East);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Editor"] = "EDITOR";
    Role["User"] = "USER";
})(Role || (Role = {}));
function getrole(role) {
    console.log(`You are a ${role}`);
}
getrole(Role.User);
var CarEngine;
(function (CarEngine) {
    CarEngine[CarEngine["Stopped"] = 0] = "Stopped";
    CarEngine[CarEngine["Started"] = 1] = "Started";
})(CarEngine || (CarEngine = {}));
function isenginerunning(status) {
    return status === CarEngine.Started;
}
console.log(isenginerunning(CarEngine.Started));
console.log(isenginerunning(CarEngine.Stopped));
