// => method 1

// export function getname({name} : {name:string}){
//     return name;
// }

// => method 2 
// function getname({name} : {name:string}){
//     return name;
// }

// export {getname}


// => Method 3 (with alias)
// function getname({name} : {name:string}){
//     return name;
// }

// export {getname as GetNaming}

// => method 4 (with multi export)
const userdatas = {
    name:"Kyaw Kyaw",
    age:20
};

function getname({name} : {name:string}){
    return name;
}

function getage({age} : {age:number}){
    return age;
}

export{userdatas,getname,getage}


