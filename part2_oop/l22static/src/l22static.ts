// => instance method

class Person{
    name:string;

    constructor(name:string){
        this.name = name; 
    }

    sayhi():void{
        console.log(`Hi My name is ${this.name}`);
    }
}

const personObj = new Person("Aung Aung");
personObj.sayhi(); // Hi My name is Aung Aung

//=> static Method 

class MathUtil{
    static square(num:number):number{
        return num*num;
    }
}

console.log(MathUtil.square(2)); // 4


// => Exercise 1

class People{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    // instance method 
    introduce():void{
        console.log(`Hi, I\m ${this.name} and I\m ${this.age} years old.`)
    }

    // static method 
    static isover18(age:number):boolean{
        return age >= 18;
    }
}

const peopleObj = new People("Yoon Yoon",19);
peopleObj.introduce(); // Hi, Im Yoon Yoon and Im 19 years old.

// console.log(peopleObj.isover18(20)); // error 

console.log(People.isover18(20)); // true
console.log(People.isover18(15)); // false


// Exercise 2 (static property)

class NumCounter{

    static count:number = 0;

    static increment():void{
        NumCounter.count++;
    }

    static showresult():void{
        console.log(`Total count is ${NumCounter.count}.`);
    }

}

NumCounter.showresult(); // Total count is 0.
NumCounter.increment(); 
NumCounter.increment(); 
NumCounter.increment(); 
NumCounter.increment(); 
NumCounter.increment(); 
NumCounter.increment(); 
NumCounter.showresult(); // Total count is 6.


// Exercise 3  

class Staff{
    static totalstaff:number = 0;

    constructor(name:string){
        Staff.totalstaff++;
    }

    static showtotal():void{
        console.log(`Total staff = ${Staff.totalstaff}`);
    }
}

const staffObj1 = new Staff("Su Su");
const staffObj2 = new Staff("Nu Nu");

Staff.showtotal(); // Total staff = 2


// 18ST 