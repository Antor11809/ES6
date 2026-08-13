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
     for (let product of products) {
        if (!("isAvailable" in product)) {
            return "Invalid";
        }
    }

    // return product.isAvailable === true; // this line is enough for this code

    return products.filter(function(product){
        if(product.isAvailable === true){
            return true;
        } else {
            return false;
        }
    })
}

let y = [
    { name: "Laptop", isAvailable: true },
    { name: "Phone", isAvailable: false },
    { name: "Mouse", isAvailable: true },
   { name: "Mouse", isAvailable: true}
]
console.log(filterAvailableProducts(y))



function filterPassedStudents(students) {
    if(!Array.isArray(students)){
        return "invalid 1"
    }
    if(students.length == 0){
        return "invalid 2"
    }
    for (let student of students) {
    if(!("passed" in student)){
        return "invalid 3"
    }
}
   return students.filter(function(student){
    if(student.passed == true){
        return true;
    }else{
        return false
    }
   })
}
