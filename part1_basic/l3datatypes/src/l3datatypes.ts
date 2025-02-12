let fullname:string = "Su Su";
console.log(fullname);


let age:number = 300;
console.log(age);

let hascar:boolean = true;
console.log(hascar);

hascar = false;
console.log(hascar);

// Any Types
let studentid;

studentid = 1001;
studentid = "1002";

// Array of string
let colorarrs:string[] = ["red","green","blue"];
console.log(colorarrs);

// Array of number
let numarrs:number[] = [10,20,30,40];
console.log(numarrs);

// Array of string & number
let mixarrs1:(string|number)[] = [100,"red","green","blue",200,300];
console.log(mixarrs1);


// Array of string & number & boolean
let mixarrs2:(string|number|boolean)[] = [true,100,"red","green","blue",200,300,false];
console.log(mixarrs2);

// Nested array of string

let greetarrs:string[][] = [
    ["hi"],
    ["hello"],
    ["how are you"]
];
console.log(greetarrs);


// Nested array of number
let evenarrs:number[][] = [
    [2,4,6],
    [8,10,12],
    [14,16,18]
];
console.log(evenarrs);

// Nested array of number & string & boolean
let infoarrs:(number|string|boolean)[][] = [
    ["aung aung",1001],
    ["age",20],
    ["hobby","coding","reading"],
    ["hascar",false]
];
console.log(infoarrs);


// Tuple (fixed value or fixed length)

const product:[string,number] = ["redbull",2500];
console.log(product);