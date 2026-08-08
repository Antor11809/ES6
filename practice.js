function recieve(name,  quantity, price){
return `${name} X ${quantity} = ${price * quantity} taka`
}
console.log(recieve("kola", 20, 3));
console.log(recieve("kola-gach", 2, 3));

let products = (name, quant, price) =>{
    return  `${name} X ${quant} = ${quant*price} Rupee`
}
console.log(products("Lamborghini", 3, 200000))
console.log(products("Sahara", 2, 150000))
// product pricecount
function calculateTotal(discount, ...prices){
    let total = 0;
    for(let i = 0; i < prices.length; i++){
        total = total + prices[i];
    }
     let discountAmount = (total * discount) / 100;
        let Afterdiscount = (total - discountAmount);
     return Afterdiscount;
}
console.log((calculateTotal(50, 100, 200, 50, 300)))
// discount on offer
// using rest operator
let discount = (discount, ...items)=>{
    let total = 0;
    for(let i = 0; i < items.length; i++){
        total = total + items[i]
    }
    let amountofdiscount = (total * discount) / 100;
    let finalprice = total - amountofdiscount;
    return finalprice;
}
console.log(discount(50, 100, 100, 100, 100, 100))

let arr1 = [1, 2, 3, 4, 5, 5]
let arr2 = [6, 7, 8, 9]
let merge = [...arr1, ...arr2]
let nEwarray = [...new Set(merge)]
// let arre = Array.from(new Set (merge))
console.log(nEwarray);
// console.log(arre);

// joining array without same element

let arra = [10, 11, 12, 13, 14, 15]
let arrb = [100, 11, 120, 130, 140, 150]
let neew = [...arra, ...arrb ]
let eksathe = [...new Set(neew)]
let numb2 = [Array.from (new Set (neew))]
console.log(eksathe)
console.log(numb2)


const calculate= (Orderamount, shippingfee) =>{
    return Orderamount >= 1000? "Free-shipping" : `Shippingfee: ${shippingfee}`
}
console.log(calculate(1200))
console.log(calculate(120, 50))

// delivery fee

let delivery = (Amount, deliveryfee) =>{
    return Amount >= 1000? "Free-Delivery" : `Delivery-cost : ${deliveryfee} taka`
}
console.log(delivery(1000))
console.log(delivery(100, 20))

// Giving grades!!
let grade = (marks) =>{
    return marks >= 90? "A+" : marks >= 80? "A" : marks>= 70? "B" : marks>= 60? "tainapass" : "fail"
}
console.log(grade(90))
console.log(grade(45))
console.log(grade(70))
console.log(grade(62))


const extract = (obj) =>{
    let {user:{name, age}} = obj;
console.log(name, age)
}
console.log(extract({user: {name: "rafi", age: 20}}))

// destructuring it is easy if u understand!!!

let destructuring = (element)=>{
    let {user:{name:username, age=18}} = element;
    console.log(username, age);
}
console.log(destructuring({user: {name: "Azad", age: 202}}))
console.log(destructuring({user: {name: "Azadi"}}))
// just swapping
let a = 50;
let b = 100;
[b, a] = [a, b]
console.log(a,b)

// rest operator

let nums = [1, 2, 3, 4, 5,]
let [first, ...roast] = nums;
console.log(first,roast)

// return the most expensive item here

const expensive = (product) =>{
    const keys = Object.keys(product);
    let highest = 0;
  let expensive = ""
    for(let key of keys){
        if(highest < product[key])
            highest = product[key]
        expensive = key;
        console.log(key, product[key])
    }
   return(highest, expensive)
return keys;
}
console.log (expensive({pen :10, watch : 500, car : 904})) 


const ggrade = (students) =>{
    console.log(students)
}
let student = [
    { name : "LB Rafi", marks : 85 },
    {name : "Tulobtammo", marks : 23}
]
console.log(ggrade(student))


const cartcalc = (jinsih) =>{
    totalItems = 0;
    totalPrice = 0;
    for (let product of jinsih ){
        console.log(product, "paisi")
        totalItems = totalItems + product.quant;
        totalPrice = totalPrice + (product.price * product.quant);
    }
    console.log(totalItems,totalPrice)
return `Total ${totalItems} item ${totalPrice} taka`
}
const productss = [
    {name : "book", price : 100, quant : 2},
    {name : "pen", price : 200, quant : 1}
]
console.log(cartcalc(productss))

// Hoyei gelo

let calculation = (Bostu) =>{
    let items = 0;
    let price = 0;
    for(let products of Bostu){
       items = items + products.quant;
       price = price + (products.price * products.quant)
    }
     return `Item ase ${items}ta r price holo ${price} Taka`
}
const obj = [
    {name : "book", price : 100, quant : 2},
    {name : "pen", price : 200, quant : 1}
]
console.log(calculation(obj))




// Module- 19  lets go//

// discount

let dixcount = (price, disc)=>{
    let discountedprice = price.map((elem, ind, arr)=>{
    console.log(ind, elem)
        discountprice = elem - (elem * disc) / 100;
        return discountprice;
    })
    return discountedprice;
}
let items = [10, 20, 30, 40, 50, 60]
console.log(dixcount(items, 50))



let passedstudents = (marks, threshold)=>{
    let filteredstudent = marks.filter(student=>{
    if(student.marks> threshold){
        return true;
    } else{
        return false;
    }
    })
     return filteredstudent;
}

let students = [
 { name: "Antor", marks: 85 },
 { name: "Rakib", marks: 72 },
  { name: "Sakib", marks: 72 }
]
console.log(passedstudents(students, 70));

// find the user
let finduser = (user, id)=>{
let userkhuji = user.find(user=>{
    return user.id === id;
})
console.log(userkhuji);
}
let users = [
    {id: 1, name: "ABCD"},
    {id: 2, name: "ABCDE"},
    {id: 3, name: "ABCDEF"}
]
console.log(finduser(users, 3))
console.log(finduser(users, 2))


let getexpensive = (cart, minprice)=>{
  let total = cart.filter(function(product) {
        return product.price >= minprice;
    }).map(product => {
    return product.price * product.quant;
}).reduce((accumulator, currentvalue)=> accumulator + currentvalue ,0)
return total;
}

let cart = [
    {name : "book", price : 100, quant : 2},
    {name : "Mini-fan", price : 200, quant : 1},
     {name : "pen", price : 20, quant : 2},
     {name : "peen", price : 20, quant : 2},
     {name : "peen", price : 20, quant : 2}
]

console.log(getexpensive(cart, 10))