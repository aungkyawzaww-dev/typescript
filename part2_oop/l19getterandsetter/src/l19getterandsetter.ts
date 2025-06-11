// Modifier                     Main Class                  Sub Class                   Outside
// public                       yes                         yes                         yes
// protected                    yes                         yes                         no
// private                      yes                         no                          no


// Syntax

// class ClassName {
//     private _property:TypeError;

//     get propertyName():Type{
//         return this._property;
//     }

//     set propertyName(val:Type){
//         this._property = value;
//     }
// }


class Person{
    private _name:string;

    constructor(name:string){
        this._name = name;
    }

    // Getter
    get name():string{
        return this._name;
    };

    // Setter
    set name(newname:string){
        if(newname.length > 0){
            this._name = newname;
        }else{
            console.log("New name cannot be empty");
        }
    }
}

const personObj = new Person("Hsu Hsu");
console.log(personObj); // Person { _name: 'Hsu Hsu' }

// console.log(personObj._name); // Error, private property
// console.log(personObj.name()); // error
console.log(personObj.name); // before setter 

personObj.name = "Su Su";
// console.log(personObj.name); // if personObj.name = ""; empty (New name cannot be empty)
console.log(personObj.name); // Su Su


// => Exercise 

class Student {
    public readonly id:number;
    public name:string;
    private age:number;
    private _hasnrc:boolean;
    phone?:string;


    constructor(id:number,name:string,age:number,_hasnrc:boolean,phone?:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this._hasnrc = _hasnrc;
        this.phone = phone;
    }

    content():void{
        console.log("Email is available");
    }

    getage():number{
        return this.age;
    }

    get hasnrc():boolean{
        return this._hasnrc;
    }

    set hasnrc(value:boolean){
        this._hasnrc = value;
    }

}

const studentObj = new Student(1001,"Kyaw Kyaw",18,true);
console.log(studentObj);


studentObj.name = "Naw Naw";
console.log(studentObj.name);  // Naw Naw

studentObj.phone = "0912345";
console.log(studentObj.phone); // 0912345

// studentObj.id = 1002;  error,readonly
// console.log(studentObj.age) ;  errror ,private

studentObj.content(); // Email is available
console.log(studentObj.getage()); //18
console.log(studentObj.hasnrc); // true

studentObj.hasnrc = false;
console.log(studentObj.hasnrc); // false
