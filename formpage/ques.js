// An e-commerce company wants to manage product information. Each product has a product ID, product name, price, and quantity.

// Task: Create a user-defined object in JavaScript that:

// 1. stores the product details,
// 2. has a method to calculate total price,
// 3. has a method to update quantity,
// 4. displays all product information.

let abes= {
    p_id:101,
    p_name:"laptop",
    p_price: 100000,
    p_quantity: 1,


    total_price: function(){
        return this.p_price*this.p_quantity;
    },
    update_quantity: function(newQuantity){
        this.p_quantity=newQuantity;
    },
    product_info: function(){
        console.log(this.p_id);
        console.log(this.p_price);
        console.log(this.p_quantity);
    }
}
abes.total_price();
abes.update_quantity(10);
abes.total_price();
abes.product_info();

