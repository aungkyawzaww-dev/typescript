// => Index Signatures 

// ERROR
// type Desktop = {
//     brand:string;
// };

// let pc:Desktop = {
//     brand:"Lenovo",
//     madeby:"China" // error
// }

// NOT ERROR 
type Desktop = {
    [k:string]:string;
};

let pc:Desktop = {
    brand:"Lenovo",
    madeby:"China"
}

console.log(pc);

type PhoneBook = {
    [name:string] : number;
};

const contacts:PhoneBook = {
    mother:12345678,
    mylove:9123456
}

console.log(contacts.mylove); // 9123456

// exe 3

type SystemUnit = {
    [k:string]:string;
    // touchscreen:boolean; // error must be same type 
    touchscreen:string;
}

let yourpc:SystemUnit = {
    brand:"Lenovo",
    touchscreen:"available",
    madeby:"China",
};

console.log(yourpc); //{ brand: 'Lenovo', touchscreen: 'available', madeby: 'China' } 

// exe 4 (i)
type MiniPC = {
    [k:string]:{
        brandname:string;
        price:number
    }
};

let officepc:MiniPC = {
    item1:{
        brandname:"Microsoft",
        price:2000
    },
    item2:{
        brandname:"Acer",
        price:3000
    },
    item3:{
        brandname:"HP",
        price:4000
    },
}

console.log(officepc);

// exe 4 (ii)

type Product = {
    brand:string;
    price:number;
}

type ProudctList = {
    [id:string]:Product;
}

const shop:ProudctList = {
    pro1:{
        brand:"redbull",
        price:1500
    },
    pro2:{
        brand:"sponsor",
        price:2000
    }
};

console.log(shop);
console.log(shop.pro2.brand); // sponsor


// exe 5 
type Staff = {
    [k:string]:string|number;
}

const employee:Staff = {
    name: "Hla Hla",
    age:23,
    department:"HR"
};

console.log(employee); // { name: 'Hla Hla', age: 23, department: 'HR' }

// => Index Access Type 

// exe 1 
type Mobile = {
    brandname:string;
    price:number;
}

type Brand = Mobile["brandname"];

const applestore:Brand = "iPhone 17 Pro Max";
console.log(applestore);

// exe 2

type Car = {
    brand:string;
    year:number;
};

type BrandType = Car["brand"];
type YearType = Car["year"];

const mycarbrand:BrandType = "Toyota";
const mycaryear:YearType = 2025;

console.log(mycarbrand,mycaryear);

// ==> Nested Index Access Type
type Item = {
    name:string;
    info:{
        price:number;
        hasstock:boolean;
    };
};

type PriceType = Item["info"]["price"];
type StockType = Item["info"]["hasstock"];

const itemprice:PriceType = 3000;
const itemstock:StockType = true;

console.log(itemprice,itemstock);


// ==>  Union with index access

type Book = {
    title:string;
    pages:number;
};

type BookKey = "title"|"pages";
type BookInfo = Book[BookKey]; // string | number

const mybooktitle:BookInfo = "TypeScript Guide Book";
const mybookpages:BookInfo = 500;

console.log(mybooktitle,mybookpages);





