class Student {

    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;


        Student.totalStudents++;
    }


    displayResult() {
        console.log("Roll No : " + this.rollNo);
        console.log("Name    : " + this.name);
        console.log("Marks   : " + this.marks);

        if (this.marks >= 40) {
            console.log("Result  : Pass");
        } else {
            console.log("Result  : Fail");
        }

        console.log("----------------------");
    }


    static displayTotalStudents() {
        console.log("Total Students : " + Student.totalStudents);
    }
}


let student1 = new Student(101, "Ayush", 85);
let student2 = new Student(102, "Rahul", 35);
let student3 = new Student(103, "Rohan", 72);


student1.displayResult();
student2.displayResult();
student3.displayResult();


Student.displayTotalStudents();