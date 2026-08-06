function greeat (name){
return name;
}
console.log("Hello", "Utsho")    

let price = 99;
let quant = 2;
let end = `hello your bill is  ${price*quant}`

console.log(end);

function gun(addd){
    let sum = 3;
    let mul = sum *3
    return mul
}
console.log(gun(2, 3))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8,];

const double = numbers.map(function (elem) {
    return elem*2;
}
)
console.log(double);

let digits = [1, 2, 3, 4, 5, 6, 7, 8];

digits.forEach((elem, ind, arr)=> {
console.log(elem, ind, arr)
});

let prices = [10, 20, 30, 40, 50]
let compare = prices.filter((elem)=>{
    return elem >= 30;
})
console.log(compare);

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a , ...b]
console.log(c);

let numberss = [10, 20, 30]

let [s, w, n] = numberss;
console.log(n);

let student = {
    name: "Antor"
};

console.log(student.marks?.math);

let studentt = {
    name: "Antor",
    age: 19,
    religin : "islam"
};

for(let key in studentt){
    console.log(key,":", studentt[key]);
}

// 