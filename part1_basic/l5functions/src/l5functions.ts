// Functions

function city(val:string):string{
    return `Hello ${val}`
}

console.log(city("Yangon"));

function cal(num1:number,num2:number):number{
    return num1+num2;
}

console.log(cal(100,200));


function car(brand:string,qty:number,tax:number):number{
    let price:number = 0;
    if(brand === "toyota") price = 3000;
    if(brand === "mazda") price = 2000;
    if(brand === "suzuki") price = 1000;

    let total:number = (price * qty) + tax;
    return total;
}

console.log(car("toyota",1,100)); // 3100
console.log(car("mazda",3,100)); // 6100


let truck = ( brand:string, qty:number,tax:number, discount:number // "noUnusedParameters" : false
    ):number=>{
        let price:number = 0;
        let result:number = 0; // "noUnusedLocals":true

        if(brand === "toyota") price = 3000;
        if(brand === "mazda") price = 2000;
        if(brand === "suzuki") price = 1000;

        let total:number = (price * qty) + tax + discount;
        return total;
}

console.log(truck("toyota",1,100,10)); // 3100
console.log(truck("mazda",3,100,10)); // 6100