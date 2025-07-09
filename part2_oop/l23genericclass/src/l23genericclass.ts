// Basic Class

class NumberStore{

    private datas:number[] = [];


    add(val:number):void{
        this.datas.push(val);
    }

    getdatas():number[]{
        return this.datas;
    }

}

const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
numberstoreObj.add(20);
console.log(numberstoreObj.getdatas()); // [ 10, 20 ]

// Genericclass 

class Store<T>{
    private datas:T[] = [];

    add(val:T):void{
        this.datas.push(val);
    }

    getdatas():T[]{
        return this.datas;
    }
}

const storeObj1 = new Store<Number>();
storeObj1.add(10);
storeObj1.add(20);
// storeObj1.add("Hello"); // error
console.log(storeObj1.getdatas()); // [ 10, 20 ]

const storeObj2 = new Store<String>();
// storeObj2.add(10);
// storeObj2.add(20);
storeObj2.add("ni ni"); 
storeObj2.add("aye aye"); 
console.log(storeObj2.getdatas()); // [ 'ni ni', 'aye aye' ]


const storeObj3 = new Store<boolean>();
// storeObj3.add(10); // error
// storeObj3.add(20); // error
// storeObj3.add("ni ni");  // error
// storeObj3.add("aye aye");  // error
storeObj3.add(true); 
storeObj3.add(false); 
console.log(storeObj3.getdatas()); // [ true, false ]


// => exercise 1 

class Student<T1,T2,T3>{
    constructor(
        public name:T1,
        public age:T2,
        public city:T3
    ){}

}

const studeentObj = new Student<string,number,string>("Nilar",19,"Yangon");
console.log(studeentObj); // Student { name: 'Nilar', age: 19, city: 'Yangon' }


const studeentObj2 = new Student<string,string,string>("Muyar","19 years old","Yangon");
console.log(studeentObj2); // Student { name: 'Muyar', age: '19 years old', city: 'Yangon' }


// exercise 2 with interface 

interface SetId{
    id:number;
}

class Storages<T extends SetId>{

    private datas:T[] = [];

    add(val:T):void{
        this.datas.push(val);
    }

    // getdatas(){
    //     return this.datas;
    // }

    // undefine ကမရှိတဲ့ data ကိုခေါမိတဲ့အခါ undefine ဖြစ်မှာဆိုးလို့ error တက်မှာဆိုးလို့
    getdatas(id:number):T | undefined{
        return this.datas.find(singleData => singleData.id === id);
    }

}

const storagesObj = new Storages<{id:number,name:string}>();
storagesObj.add({id:1,name:"Kyaw Kyaw"});
storagesObj.add({id:2,name:"Mg Mg"});
storagesObj.add({id:3,name:"Nu Nu"});
// console.log(storagesObj.getdatas()); //[ { id: 1, name: 'Kyaw Kyaw' }, { id: 2, name: 'Mg = Mg =' } ]
console.log(storagesObj.getdatas(3)); //{ id: 3, name: 'Nu Nu' }






// 25CD 






