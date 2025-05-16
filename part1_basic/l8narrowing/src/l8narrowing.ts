// => Narrowing

function myfun(val:string|number){

    if(typeof val === "string"){
        console.log(`String in uppercase : ${val.toLocaleUpperCase()}`);
    }else{
        console.log(`Number value : ${val}`);
    }

}

myfun("Hello Sir");  // String in uppercase : HELLO SIR
myfun(10);  // Number value : 10


// => Conditional Narrowing
type Laptop = {
    brandname:string;
}

function getitems(item:Laptop | Laptop[]){

    if(Array.isArray(item)){
        return item.length;
    }else{
        return item.brandname;
    }

}

console.log(getitems({brandname:"HP"})); // HP
console.log(getitems([{brandname:"Dell"},{brandname:"Lenovo"}])); // 2


// => Object  Narrowing 

type Article = {
    title:string;
    content:string;
    public:boolean;
    user_id:number
};

let post:Article = {
    title:"New Post One",
    content:"This is new post",
    public:true,
    user_id:1
}

console.log(post.title); // New Post One
console.log(post.content); // This is new post

type News = {
    title:string;
}

const topic:News = post;

console.log(topic); // { title: 'New Post One', content: 'This is new post', public: true, user_id: 1 }
console.log(topic.title); // New Post One
// console.log(topic.content); // error 



