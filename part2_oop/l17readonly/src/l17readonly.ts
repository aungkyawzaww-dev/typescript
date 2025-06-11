// readonly

class Student {
    readonly id:number; // ဒီ id ကို override လုပ်လို့မရတော့
    name:string;
    age:number;
    phone?:string;

    constructor(id:number,name:string,age:number,phone?:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    content():void{
        console.log("Email is avaliable");
    }
}

const studentObj = new Student(1001,"Su Su",18);
console.log(studentObj); // Student { id: 1001, name: 'Su Su', age: 18, phone: undefined }
console.log(typeof studentObj); // object

console.log(studentObj.id); // 1001
console.log(studentObj.name); // Su Su
console.log(studentObj.age); // 18
console.log(studentObj.phone); // undefined

studentObj.content(); // Email is avaliable

// studentObj.id = 1003; // Error: not allown cuz id is readonly 

studentObj.phone = "0912345";
console.log(studentObj.phone); // 0912345

const stuObj = new Student(1001,"Tun Tun",20,"09897654");
console.log(stuObj.phone); // 09897654