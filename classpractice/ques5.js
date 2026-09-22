// 5. Online Cab Booking System
// Create a base class Vehicle having vehicleNo, driverName, and distance. Provide a method calculateFare() in the base class. Create two derived classes Car and Bike. Override calculateFare() such that a car charges Rs. 15 per km while a bike charges Rs. 8 per km. Use constructors and super() appropriately. Also create a static method in Vehicle to display the common booking platform name. Create objects of Car and Bike and calculate their fares for different distances.   Concepts Covered: Inheritance, Constructor Chaining, Static Method, Method Overriding, Runtime Behavior   

class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    calculateFare() {
        return 0;
    }

    static platformName() {
        console.log("Booking Platform: GoRide");
    }
}


class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 15;
    }
}

class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 8;
    }
}

Vehicle.platformName();

let car = new Car("UP14AB1234", "Ayush", 20);
let bike = new Bike("UP14XY5678", "Akshit", 20);

console.log("\nCar Details:");
console.log(`Vehicle No: ${car.vehicleNo}`);
console.log(`Driver Name: ${car.driverName}`);
console.log(`Distance: ${car.distance} km`);
console.log(`Fare: Rs. ${car.calculateFare()}`);

console.log("\nBike Details:");
console.log(`Vehicle No: ${bike.vehicleNo}`);
console.log(`Driver Name: ${bike.driverName}`);
console.log(`Distance: ${bike.distance} km`);
console.log(`Fare: Rs. ${bike.calculateFare()}`);