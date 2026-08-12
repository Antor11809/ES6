function employeeIntroduction(employee) {
    if(typeof employee !== "object" || employee === null){
        return "Invalid"
    }
if(!("name" in employee) || !("age"in employee) || !("position" in employee)){
    return "Invalid"
}
    return `My name is ${employee.name}. I am ${employee.age} years old. I work as a ${employee.position}.`
}

function filterAvailableProducts(products) {
    return products.filter(function(product){
          return product.isAvailable === true;
    })
}
let y = [
    { name: "Laptop", isAvailable: true },
    { name: "Phone", isAvailable: false },
    { name: "Mouse", isAvailable: true }
]
console.log(filterAvailableProducts(y))