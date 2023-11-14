/*
    Prompt Menu
        1. Buy Item
            1.1. Prompt Select Our Product (Product List)
            1.2. Prompt Input quantity of product ("Input quantity of product")
                1.2.1   if(quantity <= stock) product added to cart
                        if(quantity > stock) user input qty ulang
        2. See Your Cart
            2.1. Alert List Products in cart("Your cart! 1 item waiting!" \n productList)
        3. Checkout 
            3.1. Prompt inputPrice (List Products in cart \n ------ + \n totalPriceProductsInCart \n Your Cash)
                3.1.1 if(cash < totalPriceProductsInCart) user input cash ulang
                3.1.2 if(cash >= totalPriceProductsInCart) transaction success
*/

/*
API Specification

Class Products {
    productId,
    productName,
    productStock,
    productPrice,
    productUnit
}

const dabataseProducts = [
    new Products(1, "Mangga", 100, 50000, "Kg")
]

const cart = [
    {productName, stock}
]
*/