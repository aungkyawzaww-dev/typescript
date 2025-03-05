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
const itemprice:FixedPrice = 700;
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
    id:number,
    name:string,
    department:string
}

const officestaff:Employee = {
    id:1001,
    name:"Yu Yu",
    department:"Accounting"
}

console.log(officestaff); // { id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(typeof officestaff); //object

const newstaff = JSON.stringify(officestaff); 
console.log(newstaff); //{"id":1001,"name":"Yu Yu","department":"Accounting"}
console.log(typeof newstaff); //string


function staffinfo(newstaffjson:string):Employee{
    // return JSON.parse(newstaffjson);

    // Old Method 
    // return (<Employee>JSON.parse(newstaffjson));

    // New Method 
    return (JSON.parse(newstaffjson)) as Employee;
}

console.log(staffinfo(newstaff)); //{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(staffinfo(newstaff).id); // 1001
console.log(staffinfo(newstaff).name); // Yu Yu
console.log(staffinfo(newstaff).department); // Accounting



// => Union Type 
let luckynumber:number|string = "777";
console.log(luckynumber);


// => Union Type in functions

function userinfo(name:string,age:number|string){
    console.log(`My name is ${name}. I am ${age} years old`);
}

userinfo("Tun Tun","20");


// exercise , Type Guads

function getinput(val:string|number){

    if(typeof val === "string"){
        return val.toUpperCase();
    }else{
        return val * 2;
    }
}

console.log(getinput("hi")); // HI
console.log(getinput(20)); //40



let dinner = (amount:number,servicefee:string|number):number => {

    if(typeof servicefee === "number"){
        return amount + servicefee;
    }else{
        return amount + parseInt(servicefee);
    }
};


console.log(dinner(3000,500));  // 3500
console.log(dinner(3000,"200")); // 3200
console.log(dinner(3000,"100 usd"));  // 3100
console.log(dinner(3000,"usd 50"));  // NaN



let lunch = (amount:number,servicefee:string|100|300|500):number => {

    if(typeof servicefee === "number"){
        return amount + servicefee;
    }else{
        return amount + parseInt(servicefee);
    }
};


console.log(lunch(3000,500));  // 3500
console.log(lunch(3000,"200")); // 3200

// console.log(lunch(3000,200)); // error
// console.log(lunch(3000,501)); // error

console.log(lunch(3000,"100 usd"));  // 3100
console.log(lunch(3000,"usd 50"));  // NaN


// Object Type with Option (?)

type ComputerUnit = {
    readonly brand:string, // override လုပ်လို့မရအောင် readonly ထည့်တာ
    price:number,
    cpu?:string, // default ပေးတဲ့ပုံစံ
    coolingfun?:boolean
}


const desktop:ComputerUnit = {
    brand:"MSI",
    price:800,
    cpu:"Intel Core I9",
    coolingfun:false
}

console.log(desktop); //{ brand: 'MSI', price: 800, cpu: 'Intel Core I9', coolingfun: false }


const laptop:ComputerUnit = {
    brand:"HP",
    price:600,
    cpu:"Intel Core I7"
}

// laptop.brand = "Lenovo";
laptop.cpu = "Corei7";

console.log(laptop); //{ brand: 'HP', price: 600, cpu: 'Corei7' }

//exe 1

type Person = {
    name:string;
    age:number;
}


type Staff = {
    uid:number;
    department:string;
}

type StaffPerson = Person & Staff;

const newperson:StaffPerson ={
    uid:1001,
    name:"Maung Kyaw",
    age:30,
    department:"IT"
};

console.log(newperson); //{ uid: 1001, name: 'Maung Kyaw', age: 30, department: 'IT' }


//exe 1 (intersection types with function)


function printpersoninfo(obj:StaffPerson){
    console.log(`ID is ${obj.uid}, Name is ${obj.name}, Age is ${obj.age} and Department is ${obj.department}`);
}

printpersoninfo(newperson); //ID is 1001, Name is Maung Kyaw, Age is 30 and Department is IT


// exe 3 

type Article = {
    id:number;
    title:string;
    price:number;
    type:string
};

type ArticleDescription = {
    content():void
}

type ArticleVdoRecord = {
    cloudprovider():void
}

type ArticlePayment = {
    paymentgateaway():void
}

type NewArticle = Article & ArticleDescription & ArticleVdoRecord & ArticlePayment

const nestjsclass:NewArticle = {
    id:1002,
    title:"Nextjs Batch 1",
    price:80000,
    type:"Zoom Class",
    content(){

    },
    cloudprovider(){

    },
    paymentgateaway(){

    }
}

console.log(nestjsclass);


// => Function Type , Default Parameter , Optional Parameter(=value), Option Parameter (?)

// exe 1 (Default Parameter )

function greet(name:string,age:number=18):string{
    return `Hello, my name is ${name} and I am ${age} years old`;
}

console.log(greet("Hnin Mya",20)); //Hello, my name is Hnin Mya and I am 20 years old
console.log(greet("Hnin Mya")); //Hello, my name is Hnin Mya and I am 18 years old

// exe 2 (Optional Parameter )

function greeting(name:string,age?:number):string{
    if(age !== undefined){
        return `Hello, my name is ${name} and I am ${age} years old`;
    }else{
        return `Hello, my name is ${name}`;
    }
}

console.log(greeting("Nyi Nyi",25)); //Hello, my name is Nyi Nyi and I am 25 years old
console.log(greeting("Nyaung Nyaung")); //Hello, my name is Nyaung Nyaung

// exe 3 (i)

let sayhi:Function;

sayhi = (msg:string):string=>{
    return msg;
}

console.log(sayhi("Mingalar Par")); // Mingalar Par


// exe 3 (ii)

let sayhello: (msg:string,name?:string,content?:string)=>string;

sayhello = (msg,name,content="What are you doing.")=>{
    if(name !== undefined){
        return `Hello ${msg}! ${name}. ${content}`;
    }else{
        return `Hello ${msg}! ${content}`;
    }
}


console.log(sayhello("Min Ga Lar Par","Muyar","How are you.")); // Hello Min Ga Lar Par! Muyar. How are you.
console.log(sayhello("Min Ga Lar Par"));  //Hello Min Ga Lar Par! What are you doing.






// 5BH 
// 26BT 
// 1VO

