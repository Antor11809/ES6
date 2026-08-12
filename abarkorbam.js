let beststudent = (students)=> {
    if(!Array.isArray(students)){
        return "Array des nai to"
    }
    if(students.length == 0){
        return "kisu to de"
    }
    for(let student of students){
        if(!student.name || !student.score){
            return "number de score de"
        }
        if(typeof student.score !== "number"){
            return "score cant be anything without number"
        }
    }
        let qualified = students.filter(function(student){
            return student.score >= 70;
        });
        let name = qualified.map(function(student){
            return student.name.toUpperCase()
        });
    
    return name.slice(0, 3)
}
let nam = [
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 },
    {name: "frrf", score: 45}
]
console.log(beststudent(nam))



let total = (scores)=>{
if(!Array.isArray(scores)){
    return "It is not an array"
}
if(scores.length == 0){
    return "No length"
}
for (let score of scores){
    if(typeof score !== "number"){
        return "Number na dile jog korbo kemne"
    }
}
    let studentsplus10 = scores.map(function(score){
        return score + 10;
    })
    let add = studentsplus10.reduce(function(acc, current){
        return acc + current;
    }, 0)
    return add;
}
let ed = [80, 65, 90, 75]

console.log(total(ed))