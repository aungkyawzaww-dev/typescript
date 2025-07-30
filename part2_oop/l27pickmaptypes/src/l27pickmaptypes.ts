// => Pick Mapped Types 

// exe 1

type ProductType = {
        id:number;
        title:string;
        price:number;
};

type PickTitleOnly = Pick<ProductType,"title">;

const productObj:PickTitleOnly = {
        title:"Redbull",
        // price:1000 // this will cause an error because "id" and "price" are not included in PickTitleOnly
};


// exe 1
type UserType = {
        id:number;
        name:string;
        age:number;
        email:string;
};

type PickUserInfo = Pick<UserType,"name" | "age">;

const userObj:PickUserInfo = {
        name:"Bo Bo",
        age:25,
        // email:bobo@gmail.com // this will cause an error because "id" and "price" are not included in PickTitleOnly
};

// => Pick for Function Params

type EmployeeType = {
        id:number;
        name:string;
        position:string;
        salary:number;
};

type PickEmployeeInfo = Pick<EmployeeType,"name" | "position">;

function Employeefun(obj:PickEmployeeInfo){
        console.log(`${obj.name} = ${obj.position}`); // Ko Ko = Developer
}

Employeefun({
        name:"Ko Ko",
        position:"Developer"
});
