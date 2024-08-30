const products = [
    {
        id: 1,
        name: "Product one",
        price: 5000,
        discount: 20
    },
    {
        id: 2,
        name: "Product two",
        price: 8000,
        discount : 10
    },
    {
        id: 3,
        name: "Product three",
        price: 20000,   
        discount : 18
    },
]

let arrSize = products.length
for(let i =0; i< arrSize; i++) {
    products[i]['discountAmt']= products[i].price * products[i].discount / 100;
    products[i]['afterdiscount'] = products[i].price- products[i]['discountAmt'];
}

console.log(products);