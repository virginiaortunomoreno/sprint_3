// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery'
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery'
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(let i=0; i<products.length; i++) {
        let product = products[i];
        if (product.id === id) {
            cartList.push(product);
        }
    }
}

// Exercise 2
function cleanCart() {
    while(cartList.length > 0)
        cartList.pop();
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    for(let i=0; i<cartList.length; i++) {
        let product = cartList[i];
        switch(product.type){
            case('grocery'):
                subtotal.grocery.value += product.price;
                break;
            case('beauty'):
                subtotal.beauty.value += product.price;
                break;
            case('clothes'):
                subtotal.clothes.value += product.price;
                break;
        }
    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    for (let product in cartList){
        total += cartList[product].price;
    }
}

// Exercise 5
function applyPromotionsSubtotals() {

}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}