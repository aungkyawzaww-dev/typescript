// regular array

let colorregarrs:string[] = ["red","green","blue"];
let numregarrs:number[] = [10,20,30];
let mixregarrs:(string|number|boolean)[] = [100,200,300,"red","green","blue",true,false];

// nested number 
let greetregarrs:string[][] = [["hi"],["hello","hay"],["hifi","zoho"]];

// nested number
let evennumsregarrs:number[][] = [[2,4],[6,8],[10,12]];

// nested string,number,boolean array
let inforegarrs:(string|number|boolean)[][] = [["aung aung"],["age",28],["hobby","sport","reading"],["hascar",false]];

// fixed value 
const productdetails:[string,number] = ["Redbull",2500];
console.log(productdetails);

type NestedArray = number | NestedArray[];
// let numbers:NestedArray = [1,2];
let numbers:NestedArray = [1,2,[30,40]];
console.log(numbers);


// => Generic Array 

// Array Notation => T[]
// Generic Array Notation => Array<T>


let colorgenarrs:Array<string> = ["red","green","blue"];
console.log(colorgenarrs);

let numgenarrs:Array<number> = [10,20];
let boolgenarrs:Array<boolean> = [true,false];
let mingenarrs:Array<string|number|boolean> = [100,200,300,true,"red","green",false,"blue"];
console.log(mingenarrs);

// => nested number type array

let evengenarrs:Array<Array<number>> = [[1,2],[3,4],[5,6]];
console.log(evengenarrs);

// => nested string,number,boolean type array 
let mixgenarrs:Array<Array<string|number|boolean>> = [[1,2],["red","green","blue"],[true,"brown",false],["hobby","reading","sport"]];
console.log(mixgenarrs);


// => Generic Function For Arrays 

// T as a placeholder (ကြိုကိတဲ့ datatype ဖြစ်နိုင်)

// function funname<T>(parameter:T):T{
//     return parameter
// }

// <T> is a type parameter thata acts as a placeholder 
// T is used as the type for the function parameter and return type.
// Following function works for any types, such as number,string, or boolean etc..


function mygenfun<T>(arrs:T[]):T{
    return arrs[0];
}

console.log(mygenfun(["red","green","blue"])); //red
console.log(mygenfun([10,20,30])); //10


function genfunone<T>(value:T):T{
    return value;
}

console.log(genfunone("hello")); //hello
console.log(genfunone(1500)); //1500
console.log(genfunone(false)); //false

console.log(genfunone<string>("hello")); // hello , T is string
console.log(genfunone<number>(1500)); // 1500 , T is number
console.log(genfunone<boolean>(true)); // true , T is boolean


// exe 3 

function genfunthree<T>(val:Array<T>):T{
    return val[2];
}

let strresult = genfunthree<string>(["aung aung","maung maung","tun tun","kyaw kyaw"]);
console.log(strresult); // tun tun

let numresult = genfunthree<number>([10,20,30,40]);
console.log(numresult); // 30

let boolresult = genfunthree<boolean>([true,false,true,false]);
console.log(boolresult); // true


// => Function with Two Generic Types 

function genfunfour<T1,T2>(val1:T1,val2:T2):[T1,T2]{
    return [val1,val2];
}

console.log(genfunfour<string,number>("Hsu Hsu",28)); // [ 'Hsu Hsu', 28 ]
console.log(genfunfour<string,boolean>("has car",true)); // [ 'has car', true ]



// => Default type for Generic Function 

function genfunfive<T = string>(value:T):T{
    return value;
}

console.log(genfunfive(""));
console.log(genfunfive("Hello")); // Hello
console.log(genfunfive(100)); //100
console.log(typeof genfunfive(100)); // number
console.log(genfunfive(true)); // true
console.log(typeof genfunfive(true)); // boolean


// =>  Generic Object Type 

// Syntax
// type ObjectType<T> = {
//     key1:T,
// };


type Book<T> = {
    title:T;
    content:T;
    price:T;
}

const Article:Book<string> = {
    title:"Article 1",
    content:"This is the story of articlel 1",
    price: "20 USD"
}

const Post:Book<number> = {
    title:2,
    content:2,
    price: 20
}

console.log(Article);


// => Generic Object with Multiple Properties 

// Syntax
// type ObjectType<T1,T2> = {
//     first:T1;
//     second:T2;
// }

type Product<T1,T2> = {
    name:T1;
    price:T2;
}

const item:Product<string,number> = {
    name:"Redbull",
    price:2500
}

console.log(item);

const item2:Product<string,string> = {
    name:"Sponsor",
    price:"FOC"
}

console.log(item2);



type Person = {
    name:string;
    gender:string;
    age:number;
}

const student:Person = {
    name:"Su Su",
    gender:"Female",
    age:25
}

// console.log(student);



// Generic Set (multi value မှာ unique ဖြစ်တဲ့သူကိုပဲယူ)
let myset = new Set([10,20,30,10,20]);

console.log(myset); //Set(3) { 10, 20, 30 }
console.log(myset.size); // 3

console.log(myset.has(20)); // true
console.log(myset.has(70)); // false


let numberset:Set<number> = new Set([1,2,3,13]);
console.log(numberset); //Set(4) { 1, 2, 3, 13 }

let nameset:Set<string> = new Set(["aung aung","maung maung","tun tun"]);
console.log(nameset); //Set(3) { 'aung aung', 'maung maung', 'tun tun' }

let mixeddatas:Set<string|number> = new Set([1,"2","Three"]);
console.log(mixeddatas); // Set(3) { 1, '2', 'Three' }


const numset:Set<number> = new Set();
console.log(numset); //Set(0) {}

numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);

console.log(numset); // Set(5) { 1, 2, 3, 4, 5 }
console.log(numset.has(2)); // true

numset.delete(2);
console.log(numset);  //Set(4) { 1, 3, 4, 5 }

numset.clear();
console.log(numset); // Set(0) {}



// => Iterating Generic Set 

const colorset:Set<string> = new Set(["Red","Green","Blue","Orange","Black"]);

console.log(colorset); //Set(5) { 'Red', 'Green', 'Blue', 'Orange', 'Black' }

for(let color of colorset){
    console.log(color); // Red Green Blue Orange Black
}

colorset.forEach((color)=>{
    console.log(color); // Red Green Blue Orange Black
});


// Generice Set with Object  
type User = {
    id:number;
    name:string;
    age:number;
};

const userset:Set<User> = new Set([
    {id:1,name:"Hsu Hsu",age:20},
    {id:2,name:"Nu Nu",age:18},
    {id:3,name:"Yu Yu",age:15},
]);

userset.add({id:4,name:"Hla Hla",age:16});

console.log(userset); // Set(4) { { id: 1, name: 'Hsu Hsu', age: 20 }, { id: 2, name: 'Nu Nu', age: 18 }, { id: 3, name: 'Yu Yu', age: 15 }, { id: 4, name: 'Hla Hla', age: 16 } }







// 12GN 