// Basic Types


// => void type 

let country:void;
console.log(country);  // undefined


let brandname:string = "";

let phone = (brand:string):void=>{
    brandname = brand;
}

console.log(phone("iPhone")); // undefined (because the function is void)
console.log(brandname); // iPhone


let points:number;
function userpoints(cashdown:boolean):number{

    if(cashdown){
        return points = 100;
    }else{
        return points = 0;
    }

}

let user1 = userpoints(true);
let user2 = userpoints(false);
// let user3 = userpoints(null);  // "strictNullChecks": false (true ဆိုရင် error)
// let user4 = userpoints(undefined);  // "strictNullChecks": false (true ဆိုရင် error)

console.log(user1);
console.log(user2);
// console.log(user3);
// console.log(user4);


let age1:undefined = undefined;
// let age2:undefined = null; // error
// let age3:undefined = 25; // error
// let age4:undefined = "Hay"; // error

let age5:undefined | null = null; 
let age6:undefined | number = 25; 
let age7:undefined | string = "Hay"; 


console.log(age1); // undefined
console.log(age5); // null
console.log(age6); // 25
console.log(age7); // Hay


// => Type Aliases

let cashback:number = 1000;
cashback = 500;
console.log(cashback); 

type Promotion = number; // Note : this is not value ! it's just type (we can call literal type)
let cashreturn:Promotion = 2000;
console.log(cashreturn);


const price: 300 | 500 | 700 = 700;
console.log(price); // 700


type FixedPrice = 300 | 500 | 700;  // Note : this is not value ! it's just type (we can call literal type)
const itemprice:FixedPrice = 300;
console.log(itemprice);

type DLTClassType = "zoom" | "vdo";
const newcourse:DLTClassType = "vdo";
console.log(newcourse);


type PersonInfo = {
    name: string;
    gender: string;
    age : number;
}


const student : PersonInfo = {
    name: "Aung Aung",
    gender: "Male",
    age: 20
}

// student.hascar = false; // error

console.log(student); // { name: 'Aung Aung', gender: 'Male', age: 20 }


// => Rescurisve Type 
type NestedArray = number | NestedArray[];

// let numberarrs:NestedArray = [10,20];
// let numberarrs:NestedArray = [10,20,[30,40]];
let numberarrs:NestedArray = [10,20,[30,40,[500,600]]];

console.log(numberarrs);


// => Type Assertions 

type Employee = {
    id:number;
    name:string;
    department: string;
}


const officestaff:Employee = {
    id:1001,
    name:"Yu Yu",
    department:"Accounting"
};

console.log(officestaff); //{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(typeof officestaff);  // object

const newstaff = JSON.stringify(officestaff);
console.log(newstaff); // {"id":1001,"name":"Yu Yu","department":"Accounting"}
console.log(typeof newstaff); //string

function staffinfo(newstaffjson:string):Employee{
    // return JSON.parse(newstaffjson);

    // Old Method 
    // return (<Employee> JSON.parse(newstaffjson));

    // New Method 
    return (JSON.parse(newstaffjson) as Employee);

}

console.log(staffinfo(newstaff)); //{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(typeof staffinfo(newstaff)); // object

console.log(staffinfo(newstaff).id); // 1001
console.log(staffinfo(newstaff).name);
console.log(staffinfo(newstaff).department);


// => Union Type
let luckynumber:number|string = "777";
console.log(luckynumber);


// => Union Type in function 

function userinof(name:string,age:number|string){
    console.log(`My name is ${name}. i am ${age} years old.`);
}

userinof("Tun Tun","20");


// exercise , Type Guard 

function getinput(val:string|number){

    if (typeof val == "string"){
        return val.toUpperCase();
    }else{
        return val * 2;
    }

}

console.log(getinput("hi")); // HI
console.log(getinput(20)); // 40


let dinner = (amount:number,serviefee:number|string):number=>{

    if(typeof serviefee == "number"){
        return amount + serviefee;
    }else{
        return amount + parseInt(serviefee);
    }

}

console.log(dinner(3000,500)); // 3500
console.log(dinner(3000,"200")); // 3200
console.log(dinner(3000,"100 usd")); // 3100
// console.log(dinner(3000,"usd 200")); // NaN





let lunch = (amount:number,serviefee:100|300|500):number=>{

    if(typeof serviefee == "number"){
        return amount + serviefee;
    }else{
        return amount + parseInt(serviefee);
    }

}

console.log(lunch(3000,500)); // 3500
console.log(lunch(3000,100)); // 3100 
// console.log(lunch(3000,501)); // error
// console.log(lunch(3000,"100 usd")); // error



// Object Type with Option (?)


type ComputerUnit = {
    readonly brand:string; // readonly is no overwrite
    price:number;
    cpu?:string;
    coolingfun?:boolean;
}

const desktop:ComputerUnit = {
    brand:"MSI",
    price:800,
    cpu:"Intel Core I9",
    coolingfun:false
}

console.log(desktop); //{ brand: 'MSI', price: 800, cpu: 'Intel Core I9', coolingfun: false }

const laptop:ComputerUnit = {
    brand:"MSI",
    price:800,
}

// laptop.brand = "Lenovo"; // no overwrite cuz: (readonly)
laptop.price = 1000; // is Ok. cuz didn't write (readyonly) in price

console.log(laptop); // { brand: 'MSI', price: 800 }


// => Intersection Types (&) (Adding types)

// exe 1 

type Person = {
    name:string;
    age:Number;
}

type Staff = {
    uid:number;
    department:string;
}

type StaffPerson = Person & Staff;

const newperson:StaffPerson = {
    uid:1001,
    name:"Tun Tun",
    age:20,
    department:"IT"
}

console.log(newperson); //{ uid: 1001, name: 'Tun Tun', age: 20, department: 'IT' }




// exe2 (intersection types with function )

function printPersonInfo(obj:StaffPerson){
    console.log(`ID is ${obj.uid}, Name is ${obj.name} , Age is ${obj.age} and Department is ${obj.department}`);
}

printPersonInfo(newperson); // ID is 1001, Name is Tun Tun , Age is 20 and Department is IT



// exe 3 

type Article = {
    id:number;
    title:string;
    price:number;
    type:string;
}

type ArticleDescription = {
    content():void;
}

type ArticleVdoRecord = {
    cloudprovider():void;
}

type ArticlePayment = {
    paymentgateway():void;
}

type NewArticle = Article & ArticleDescription & ArticleVdoRecord & ArticlePayment;

const nextjsClass:NewArticle = {
    id:1002,
    title:"nextJs Class",
    price:400,
    type:"VdoClass",
    content(){

    },
    cloudprovider(){

    },
    paymentgateway(){

    }
}

console.log(nextjsClass);


// => Function Type  , Default Parameter ( =value ) , Optional Parameter (?)

// exe1 (Default Parameter)

function greet(name:string,age:number=18):string{
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet("Hnin Mya",20)); // Hello, my name is Hnin Mya and I am 20 years old.
console.log(greet("Hnin Hnin")); // Hello, my name is Hnin Hnin and I am 18 years old.


// exe2 Optional Parameter (?)
function greeting(name:string,age?:number):string{
    if(age !== undefined){
        return `Hello, my name is ${name} and I am ${age} years old.`;
    }else{
        return `Hello, my name is ${name}.`;
    }
}

console.log(greeting("Kaung Kaung",20)); // Hello, my name is Kaung Kaung and I am 20 years old.
console.log(greeting("Nyaung Nyaung")); // Hello, my name is Nyaung Nyaung.



// exe 3 (i)
let sayhi:Function;

sayhi = (msg:string):string=>{
    return msg;
}

console.log(sayhi("Mingalar Par")); //Mingalar Par


// exe 3 (ii)
// let sayhello:Function;
let sayhello: (msg:string,name?:string,content?:string)=>string;

sayhello = (msg,name,content="What are you doing.")=>{

    if (name !== undefined){
        return `Hello ${msg}!, ${name}. ${content}`;
    }else{
        return `Hello ${msg}!, ${content}`;
    }

}

console.log(sayhello("Min Ga Lar Par","Muyar","How are you?")); // Hello Min Ga Lar Par!, Muyar. How are you?
console.log(sayhello("Min Ga Lar Par")); // Hello Min Ga Lar Par!, What are you doing.



// => Nested Object Type 

type Address = {
    street:string;
    city:string;
    country:string;
}

type Customer = {
    name:string;
    phone:string;
    address:Address; // Nested Object type
}

const vipcu:Customer = {
    name:"U Hla",
    phone:"0912345",
    address:{
        street:"123 Main St",
        city: "Mandalay",
        country: "Myanmar"
    }
}

console.log(vipcu);


// =>  Literal Object Type 

function employer(owner:{fullname:string}):string{
    return owner.fullname;
}

console.log(employer({fullname:"Mon Mon"})); // Mon Mon



// =>  Literal Object Type  (Destructuring)

function lawyer({fullname}:{fullname:string}):string{
    return fullname;
}

console.log(lawyer({fullname:"U Ba"})); // U Ba



// => typeof in "in typescript Typequery"

const Animal = {
    name:"Panda",
    age:7
}

type Pet = typeof Animal;

let petone:Pet = {
    name:"Cute cat",
    age:10
}

console.log(petone); // { name: 'Cute cat', age: 10 }






// 5BH 
// 26BT 
// 1VO

