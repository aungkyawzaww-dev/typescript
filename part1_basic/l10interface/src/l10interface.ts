type age = number;

type Student = {
    id:number;
    name:string;
    hobbies:string[];
}

// Interface

// interface city = string; // can't declare like that

interface Employee{
    id:number;
    name:string;
    hobbies:string[];
};

function applicant(id:number,name:string,hobbies:string[]):Employee{
    return {
        id:id,
        name:name,
        hobbies:hobbies
    }
}

let result1:Employee = applicant(1001,"Nu Nu",["reading","sporting"]);

console.log(result1); // { id: 1001, name: 'Nu Nu', hobbies: [ 'reading', 'sporting' ] }


function application(id:number,name:string,hobbies:string[]):Employee{
    return {
        id,
        name,
        hobbies
    }
}

let result2:Employee = application(1002,"Yu Yu",["sporting","swimming"]);

console.log(result2); // { id: 1002, name: 'Yu Yu', hobbies: [ 'sporting', 'swimming' ] }


// => Interface Method
// exe1
interface Employer {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function cvform(id:number,name:string,hobbies:string[]):Employer{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return this.hobbies;
        }
    }
}

const result3:Employer = cvform(1003,"Aung Aung",["football","travel"]);
console.log(result3);

// exe2
interface Lawer {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}



function getinfo(id:number,name:string,hobbies:string[]):Lawer{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return result4.hobbies;
        }
    }
}

const result4:Lawer = getinfo(1004,"U Ba",["reading","travel"]);
console.log(result4);
console.log(result4.gethobbies()); //[ 'reading', 'travel' ]


// => Extending Interface 

interface Task {
    tasks:string[];
}

interface Staff extends Task{
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function personalinfo(id:number,name:string,hobbies:string[],tasks:string[]):Staff{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            // return this.hobbies;
            return result5.hobbies;
        },
        tasks
    }
}

const result5:Staff = personalinfo(1005,"Shwe Zin",["reading","travel"],["printing","reporting"]);
console.log(result5);

// => Argumenting Interfaces 

// type Name = string;
// type Name = string; // can't same name!

interface Product {
    brand:string;
    price:number;
}

// interface ကို အပေါမှာပဲဖြစ်ဖြစ်အောက်မှာပဲဖြစ်ဖြစ်တည်ဆောက်လည်း affect ဖြစ်နေမှာပဲ
// interface Product {
//     packing:string;
//     stock:number;
//     price: number; // can contain again but must be the same data type 
// }


const productinfo:Product = {
    brand:"Redbull",
    price:2500.78,
    packing:"can",
    stock:12
}


interface Product {
    packing:string;
    stock:number;
    price: number; // can contain again but must be the same data type 
}



console.log(productinfo);