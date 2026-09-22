// 3. Employee and Manager Payroll
//  Create a base class Employee containing id, name, and basicSalary. Initialize them using a constructor and create a method calculateSalary() that returns the basic salary. Create a derived class Manager that adds an incentive property. Use super() to initialize inherited properties and override calculateSalary() so that a manager's total salary is calculated as basicSalary + incentive. Create objects of both classes and display their salaries.   Concepts Covered: Inheritance, extends, super(), Constructor, Method Overriding

class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }   

    
    calculateSalary() {
        return this.basicSalary;
    }

    displaySalary() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ₹${this.calculateSalary()}`);
    }
}



class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
     
        super(id, name, basicSalary);


        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}



let employee1 = new Employee(101, "Ayush Panwar", 30000);

console.log("--- Employee Details ---");
employee1.displaySalary();



let manager1 = new Manager(102, "Akshit Malik", 50000, 10000);

console.log("\n--- Manager Details ---");
manager1.displaySalary();