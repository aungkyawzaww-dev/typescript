// Abstract Class 
    // class must start with abstract keoword. 
    // abstract class can't instance

// Abstract Method 
    // An abstract method is a method decclared in an abstract class that does not have a ReportBOdy. It must be implements in an sub class.


    abstract class People {
        constructor(
            public name:string,
            public age:number
        ){}

        abstract getrole():string;

        showinfo():void{
            console.log(`Name = ${this.name}, Age = ${this.age}, Role: ${this.getrole()}`);
        }
    }


    class Student extends People {
        constructor(
            public name:string,
            public age:number,
            public grade:string
        ){
            super(name,age); // call parent constructor
        }

        getrole():string{
            return "Student"
        }

        study():void{
            console.log(`${this.name} is studying in grade ${this.grade}.`);
        }
    }


    class Staff extends People {
        constructor(
            public name:string,
            public age:number,
            public department:string
        ){
            super(name,age); // call parent constructor
        }

        getrole():string{
            return "Staff"
        }

        work():void{
            console.log(`${this.name} work in ${this.department} department.`);
        }
    }


    class Employee extends People {
        constructor(
            public name:string,
            public age:number,
            public position:string,
            public salary:string
        ){
            super(name,age); // call parent constructor
        }

        getrole():string{
            return "Employee"
        }

        study():void{
            console.log(`${this.name} earns $${this.salary} as a ${this.position}.`);
        }
    }



// const peopleObj = new People("Kyaw Kyaw",20); // error 

const studentObj = new Student("Kyaw Kyaw",20,"Grade 11"); 
studentObj.showinfo(); // Name = Kyaw Kyaw, Age = 20, Role: Student
studentObj.study(); // Kyaw Kyaw is studying in grade Grade 11.

const staffObj = new Staff("Tun Tun",23,"IT"); 
staffObj.showinfo();
staffObj.work();



