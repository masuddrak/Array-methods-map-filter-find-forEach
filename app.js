const products=[
    {name:'phone', brand:'iphone',price:50000,color:'silver'},
    {name:'watch', brand:'casio',price:500,color:'white'},
    {name:'laptop', brand:'acer',price:53000,color:'golden'},
    {name:'phone', brand:'lg',price:5000,color:'silver'},
    {name:'phone', brand:'htc',price:45000,color:'yello'}
]
//1 map using array of object
const brand=products.map(product=>product.color)
// console.log(brand)
const price=products.map(product=>product.price)
// console.log(price)

//2 forEach
// products.forEach(product=>console.log(product.name))
// products.forEach(product=>console.log(product))

// 3 fillter

const lowPrice=products.filter(product=>product.price<=5000)
// console.log(lowPrice)
const phone=products.filter(product=>product.name.includes('phone'))
// console.log(phone)
const color=products.filter(product=>product.color.includes('silver'))
// console.log(color)

// 4 find
const spesificPhone=products.find(product=>product.name.includes('phone'))
console.log(spesificPhone)