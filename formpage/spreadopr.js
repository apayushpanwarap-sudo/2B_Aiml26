function sum(...values){
    let s=0
    for(let i of values){
        s+=i

    }
    console.log(s)
};
let arr=[10,20,30,40]
// sum(...arr)
let a=[10,20,30]
let b=[40,50,60]
let c=[60,...a,70,...b]
// console.log(c)

// let name="ayush";
// let name=new string;
// name="ayush";
// let name="ayush";
// let rollNumber=101;
// let data={
//     name,
//     rollNumber,
// };
// console.log(data.name);
// console.log(data.rollNumber);
let f="firstName";
let l="lastName";
let data={
    [f]: "Ayush",
    [l]: "Panwar",
    show(){
        console.log(this.firstName+" "+this.lastName)
    }

};
console.log(data.firstName);
console.log(data.lastName);
data.show();