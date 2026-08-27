// const student={
//     firstName: "Ayush",
//     lastName: " Panwar",
//     city: "ghaziabad",
//     pincode: 201002,
//     salary: function(){
//         console.log("salary");
//     },
//     subject: ["java script","c++","java"],
// }
// console.log(student["firstName"]);
// console.log(student["lastName"]);
// console.log(student["city"]);
// console.log(student["pincode"]);
// console.log(student["salary"]());
// let student=new Object();
//      student.name="ayush";
//      student.pincode=201002;
// console.log(student["pincode"]);   
function student(name,rollNumber,pincode,city){
    this.name=name;
    this.rollNumber=rollNumber;
    this.pincode=pincode;
    this.city=city;
}  
let s1=new student("ayush",101,201002,"rajnagar");
let s2=new student("dhruv",102,201002,"chipyana");
console.log(s1)