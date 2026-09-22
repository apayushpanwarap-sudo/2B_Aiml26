// 4. E-Commerce Product System
//  Create a class Product with productId, productName, and price. Add an instance method getDiscountedPrice(discount) to calculate the final price. Create a static method compareProducts(p1, p2) that accepts two Product objects and displays the product having the higher price. Create a derived class Electronics having an additional property warranty. Override a suitable display method so that electronics-specific information is also displayed.   Concepts Covered: Objects as Arguments, Static Method, Instance Method, Inheritance, Overriding 

class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

  
    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    display() {
        console.log(`Product ID: ${this.productId}`);
        console.log(`Product Name: ${this.productName}`);
        console.log(`Price: Rs. ${this.price}`);
    }


    static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log(`${p1.productName} has the higher price.`);
        } else if (p2.price > p1.price) {
            console.log(`${p2.productName} has the higher price.`);
        } else {
            console.log("Both products have the same price.");
        }
    }
}


class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }


    display() {
        super.display();
        console.log(`Warranty: ${this.warranty} years`);
    }
}


let p1 = new Product(101, "Shoes", 2000);
let p2 = new Electronics(102, "Laptop", 60000, 2);

p1.display();
console.log(`Discounted Price: Rs. ${p1.getDiscountedPrice(10)}`);

console.log("\nElectronics Details:");
p2.display();
console.log(`Discounted Price: Rs. ${p2.getDiscountedPrice(15)}`);

console.log("\nPrice Comparison:");
Product.compareProducts(p1, p2);