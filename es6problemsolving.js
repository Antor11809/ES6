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

                //  MODULE 19!!!!!

  let discountapply = (prices, discount)=>{
    let discountprice = prices.map((elem, ind, arr)=>{
        console.log(ind, elem)
    const discountedprice = elem - (elem * discount / 100)
    return discountedprice;
    })
  return discountprice;
  } 
  let prod = [340, 540, 560, 560, 340, 340]
  console.log(discountapply(prod, 50))



let passingstudents = (students, threshold) =>{
 let filteredstudents = students.filter(student =>{
    console.log(student)
    if(student.marks > threshold){
        return true;
    } else {
        return false;
    }
 })
 return filteredstudents;
  }
let students = [
 { name: "Antor", marks: 85 },
 { name: "Rakib", marks: 72 },
 { name: "Sakib", marks: 91 },
 { name: "Nabil", marks: 68 },
 ]
  console.log(passingstudents (students, 90) )


let finduserbyid = (user, id)=>{
let expecteduser = user.find(user=>{
    return user.id === id
})
console.log(expecteduser, "paisi")
}
let users = [
    {id: 1, name: "ABCD"},
    {id: 2, name: "ABCDE"},
    {id: 3, name: "ABCDEF"}
]
console.log(finduserbyid(users,2))



// let getcardtotal = (cart)=>{
// let total = cart.reduce((accumulator, elem)=>{
//     console.log(accumulator, elem)
//     return accumulator + (elem.price * elem.quant)
// }, 0)
// return total;
// }
// let cart = [
//     {name : "book", price : 100, quant : 2},
//     {name : "pen", price : 200, quant : 1}
// ]
// console.log(getcardtotal(cart))

let getexpensive = (cart, minprice)=>{
    let total = cart.filter(product => product.price >= minprice).map(product=>{
       return product.price*product.quant; }).reduce((accumulator, currentvalue)=> accumulator + currentvalue ,0)
return total;
}

let cart = [
    {name : "book", price : 100, quant : 2},
    {name : "Mini-fan", price : 200, quant : 1},
     {name : "pen", price : 20, quant : 2},
     {name : "peen", price : 2067, quant : 24},
]

console.log(getexpensive(cart, 10))



let lifecounter = () =>{
let lives = 3;


    return () =>{
        if(lives > 0){
            lives--;
        }
    return lives;
    }
}

const antorlifeupdate = lifecounter()
console.log(antorlifeupdate())
console.log(antorlifeupdate())
console.log(antorlifeupdate())
console.log(antorlifeupdate())

let shortdescending = (nums)=>{
    console.log(nums)
    const nums2 = [...nums]
    const sortednums = nums.sort((a,b) =>{
        return b-a;
    })
     console.log(sortednums)

}
   
let numbers = [1, 2, 3, 4,5, 6, 7, 8]
console.log(shortdescending(numbers))