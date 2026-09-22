// 6. Hospital Management System
//  Create a base class Person with id, name, and age. Create a derived class Doctor containing specialization and consultationFee, and another derived class Patient containing disease and roomNo. Use constructors and super() for initialization. Define displayDetails() in Person and override it in both Doctor and Patient to display their specific information. Add a static member/method in Person to count and display the total number of persons created in the system. Create at least two doctors and two patients and display their details.   Concepts Covered: Hierarchical Inheritance, Constructor, super(), Static Member, Instance Method, Method Overriding

class Person {
    static totalPersons = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;

        Person.totalPersons++;
    }

    displayDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }

    static displayTotalPersons() {
        console.log(`\nTotal Persons: ${Person.totalPersons}`);
    }
}

class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }

    displayDetails() {
        console.log("Doctor Details:");
        super.displayDetails();
        console.log(`Specialization: ${this.specialization}`);
        console.log(`Consultation Fee: Rs. ${this.consultationFee}`);
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        console.log("Patient Details:");
        super.displayDetails();
        console.log(`Disease: ${this.disease}`);
        console.log(`Room No: ${this.roomNo}`);
    }
}

let doctor1 = new Doctor(
    101,
    "Dr. Sharma",
    45,
    "Cardiologist",
    1000
);

let doctor2 = new Doctor(
    102,
    "Dr. Verma",
    40,
    "Neurologist",
    1200
);

let patient1 = new Patient(
    201,
    "Dhruv",
    20,
    "Fever",
    101
);

let patient2 = new Patient(
    202,
    "Akshit",
    22,
    "Migraine",
    102
);

doctor1.displayDetails();

console.log("\n");

doctor2.displayDetails();

console.log("\n");

patient1.displayDetails();

console.log("\n");

patient2.displayDetails();


Person.displayTotalPersons();