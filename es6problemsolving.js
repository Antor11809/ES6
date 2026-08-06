// ES6 problem solving module-16!!!

function recieve(name, price, quantity){
return `${name} X ${quantity} = ${price * quantity} taka`
}
console.log(recieve("kola", 20, 3));
console.log(recieve("kola-gach", 20000, 3));

function calculateTotal(discount, ...prices){
    console.log(prices);
    let total = 0;
    for(let i = 0; i < prices.length; i++){
        total = total + prices[i];
    }
     let discountAmount = (total * discount) / 100;
        console.log(discountAmount)
        let Afterdiscount = (total - discountAmount);
        console.log(Afterdiscount);
     return Afterdiscount;
}
(calculateTotal(10, 100, 200, 50, 300))

let arr1 = [1, 2, 3, 4, 5, 5]
let arr2 = [6, 7, 8, 9]
let merge = [...arr1, ...arr2]
let nEwarray = [...new Set(merge)]
let arre = Array.from(new Set (merge))
console.log(nEwarray);
console.log(arre);

const calculate= (Orderamount, shippingfee) =>{
    return Orderamount >= 1000? "Free-shipping" : `Shippingfee: ${shippingfee}`
}
console.log(calculate(1200))
console.log(calculate(120, 50))

const getGrade = (mark) => {
    // if(mark>=80){
    //     return "A+"
    // } else if(mark>=70){
    //     return "A"
    // } else if(mark>=60){
    //     return "B"
    // } else {
    //     return "fail korecho mona"
    // }
    return mark>=90 ? "A+" : mark>=70 ? "A" : mark>=60 ? "motamoti" : "fail korcho mona"
}
console.log(getGrade(90))
console.log(getGrade(70))
console.log(getGrade(60))
console.log(getGrade(9))


const extract = (obj) =>{
    let {user:{name}} = obj;
console.log(name)
}
console.log(extract({user: {name: "rafi", age: 20}}))

let a = 10;
let b = 20;
[b, a] = [a,b]
console.log(a,b)

let nums = [1, 2, 3, 4, 5,]
let [first, ...rest] = nums;
console.log(first,rest)

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
}
console.log (expensive({pen :10, watch : 500, Gari : 904})) 

const grade = (students) =>{
    console.log(students)
}
let student = [
    { name : "LB Rafi", marks : 85 },
    {name : "Tulobtammo", marks : 23}
]
console.log(grade(student))

const cartcalc = (jinsih) =>{
    totalItems = 0;
    totalPrice = 0;
    for (let product of jinsih ){
        console.log(product, "paisi")
        totalItems = totalItems + product.quant;
        totalPrice = totalPrice + (product.price * product.quant);
    }
    console.log(totalItems,totalPrice)
console.log(products);
return `Total ${totalItems} item ${totalPrice} taka`
}
const products = [
    {name : "book", price : 100, quant : 2},
    {name : "pen", price : 200, quant : 1}
]
console.log(cartcalc(products))