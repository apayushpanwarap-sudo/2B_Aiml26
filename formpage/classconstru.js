// class student {
//     constructor(name,roll,year){
//         this.rollnumber = roll;
//         this.Name = name;
//         this.Year = year;
//     console.log(this.rollnumber);
//     console.log(this.Name);
//     console.log(this.Year);
//     }
//  };
//     let s1=new student();
//     let s2=new student("ayush",101,2007);
//     let s3=new student("akshit",102,2007);


//     // static function
// class student {
//     static fname="ayush";
//     static  lname="panwar";
//     display(){
//         console.log(student.fname);
//         console.log(student.lname);
        
//     }
// }
// let s1=new student();
//  s1.display();    


class hello{
    constructor(){
        console.log("hello constructor");

    }
}
class hi extends hello{
    constructor(){
        super();
        console.log("hi constructor");
    }
}
let n1=new hi();