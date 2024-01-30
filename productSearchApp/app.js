let product1 = {
    id: 1,
    name: "Apple Macbook Air M1 ",
    category: "Technology",
    price: 24.626
}

let product2 = {
    id: 2,
    name: "Apple Macbook Air M2 ",
    category: "Technology",
    price: 28.626
}


let product3 = {
    id: 3,
    name: "Apple Macbook Pro M2 ",
    category: "Technology",
    price: 64.626
}


let product4 = {
    id: 4,
    name: "Lenovo Legion 5 ",
    category: "Technology",
    price: 38.635
}


let product5 = {
    id: 5,
    name: "Lenovo Ideapad 3 ",
    category: "Technology",
    price: 26.626
}




let products = [product1, product2, product3, product4, product5];
let filteredProducts = [];
let searchedProduct = prompt("Enter a product name")

fillFilteredProducts(products);
FilteredProductPrint(filteredProducts);


function fillFilteredProducts(products) {
    products.forEach(function (product) {
        if (product.name.toUpperCase().includes(searchedProduct.toUpperCase(),0)) {
            filteredProducts.push(product);
        }
    });
}

function FilteredProductPrint(products) {
    products.forEach(function (product) {
        console.log("----------------------");
        console.log(" | " + product.name + " | " + product.price + " | " + product.category);
        console.log("----------------------");

    })
}
