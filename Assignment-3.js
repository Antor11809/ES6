// lets go for Assignment NUM-1 !!!
function studentIntroduction(student) {
    if(typeof student !== "object" || student === null){
        return "Invalid";
    }
    if(!student.name || !student.age || !student.course){
        return "Invalid"
    }
return `My name is ${student.name}. i am ${student.age} years old. I am learning ${student.course} `
}






