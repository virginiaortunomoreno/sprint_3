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

// Exercise 1-5-7
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    cart = [];
    for(let i=0; i<products.length; i++) {
        let product = products[i];
        if (product.id === id) {
            cartList.push(product);
        }
    }
    for (let i=0; i<cartList.length; i++) {
        let product = cartList[i];
        if (cart.indexOf(product) === -1) {
            product.quantity = 1;
            product.subtotal = product.price * product.quantity;
            cart.push(product);
        } else {
            product.quantity++;
            product.subtotal = product.price * product.quantity;
        }
    }
    calculateSubtotals();
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
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for(let i=0; i<cart.length; i++) {
        let product = cart[i];
        switch(product.type){
            case 'grocery':
                subtotal.grocery.value += product.price * product.quantity;
                break;
            case 'beauty':
                subtotal.beauty.value += product.price * product.quantity;
                break;
            case 'clothes':
                subtotal.clothes.value += product.price * product.quantity;
                break;
        }
    }
    calculateTotal();
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart
    total = 0;
    for (let sub in subtotal){
        total += subtotal[sub].value;
    }
    applyPromotionsCart();
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let indexCookingOil = cart.findIndex(products => products.name === 'cooking oil');
        if (indexCookingOil != -1) {
            if (cart[indexCookingOil].quantity >=3) {
                cart[indexCookingOil].subtotalWithDiscount = 10 * cart[indexCookingOil].quantity;
            }
        }
       
    let indexCupcakeMixture = cart.findIndex(products => products.name === 'Instant cupcake mixture');
        if (indexCupcakeMixture != -1) {
            if (cart[indexCupcakeMixture].quantity >= 10) {
                cart[indexCupcakeMixture].subtotalWithDiscount = ((cart[indexCupcakeMixture].price * 2)/3) * cart[indexCupcakeMixture].quantity;
            }
        } 
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