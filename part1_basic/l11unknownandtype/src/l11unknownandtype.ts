// unknown vs any 


// Feature                     unknown                             any
// Type safety                 Safe                                Unsafe
// Assing to other types       Not allowed without checks          Allowed

// => unknown 

let sayhi:unknown = "Hello Sir";
let age:unknown = 28;

console.log(typeof age);

// let getage:number = age;
// console.log(getage); // can;t use unknown to number types

// exe 1
let getage:number = typeof age == "number" ? age : 20;
console.log(getage); // 28

// exe 2
let phone:unknown = "0912345";
console.log(typeof phone); // string


let getphone:number = typeof phone === "number" ? phone : 119
console.log(getphone); //119 // cuz it is string


// exe 3
let unknownval:unknown = "hello";
unknownval = true;
unknownval = 20;

console.log(unknownval); // 20

let getval:number = typeof unknownval == "number" ? unknownval : 0;
console.log(getval);

// --------------------------------------------------------------------------


// => any type 

// exe 1
let fullname:any = "Kyaw Kyaw";
let nickname:number = fullname;
console.log(fullname); // Kyaw Kyaw

// exe 2 
let firstname:any = "Hsu";
let lastname:unknown = firstname;
console.log(lastname);

//exe3
let anyval:any = "hello";
anyval = 20;
anyval = true;

console.log(anyval); // true

let getnum:number = anyval;
console.log(getnum); // true        No error , even if it's not a number


// --------------------------------------------------------------------------


// => any with unknown 


// Not Recommended
let brand:unknown = "Redbull";
let price:any = brand;


let fee:number = price; // beware : string is working in number type
console.log(fee); // Redbull
 


// Recommended
let brandname:any = "Sponsor";
let oridinaryprice:unknown = brandname;

// let sellprice:number = oridinaryprice; // error  , beware : string is not working in number type
let sellprice:number = typeof oridinaryprice === "number" ? oridinaryprice : 0;
console.log(sellprice); //0

// --------------------------------------------------------------------------

// => unknown in Union (|) and vs Intersection (&) types

// let productname:unknown|string = "Sponsor"; //  unknown|string not oki , any|string is oki
// let companyname:string = productname;

// let productname:unknown|number = 1500; //  unknown|number not oki , any|number is oki
// let companyname:number = productname;


// let productname:unknown&string = "Sponsor";
// let companyname:string = productname;
// console.log(companyname); // Sponsor


// let productname:unknown&number = 1500;
// let companyname:number = productname;
// console.log(companyname); // 1500

// ERROR 
// let productname:unknown&number = 1500;
// let companyname:string = productname;
// console.log(companyname); // error , because of opposite type

// --------------------------------------------------------------------------
