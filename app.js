const products=[
    {name:'phone', brand:'iphone',price:50000,color:'silver'},
    {name:'watch', brand:'casio',price:500,color:'white'},
    {name:'laptop', brand:'acer',price:53000,color:'golden'},
    {name:'phone', brand:'lg',price:5000,color:'silver'},
    {name:'phone', brand:'htc',price:45000,color:'yello'}
]
// map using array of object
const brand=products.map(product=>product.color)
// console.log(brand)
const price=products.map(product=>product.price)
// console.log(price)

// forEach
products.forEach(product=>console.log(product.name))
products.forEach(product=>console.log(product))