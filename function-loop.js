//products.map((product, i) => {
//    product['discountAmount'] = product.price*product.discount/100;
//    product['afterDis'] = product.price- product['discountAmount'];
//})

console.log([...Array(10)]);

[...Array(10)].map((_, i) => {
    console.log(i+1)
})

let numb1 = [1,2,3,4,5,6,7,8,9,10]

let sum = numb1.reduce((sum, num) => {
    sum += num
    return sum;
})
console.log(sum)