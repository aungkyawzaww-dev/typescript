let fullname = "Mar Lar";
fullname = "Kyi Pyar";

console.log(fullname);

let age = 25;
age = 30;

console.log(age);

// type Person = {
//     name:string;
//     age:number;
// }

type Person = {
    name:"Yu Yu";
    age:number;
}


const student = {
    name:"Yu Yu" as const, // must be same value as type Person , must contain 'as const'
    age:20
}

function studentname(student:Person){
    return student.name;
}

console.log(studentname(student));