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

function studentIntroduction(student) {
    if(typeof student !== "object"){
        return "object na eita"
    }
    if(!"name"in student || !"age" in student || !"course" in student){
        return "Missing items"
    }
return `My name is ${student.name}.I am ${student.age} years old.I am learning ${student.course}.`;
}

let introduction = {name:"Rafi",age:18,course:"JavaScript"}
console.log(studentIntroduction(introduction))


function filterActiveUsers(users) {
    if(!Array.isArray(users)){
        return "array na"
    }
    if(users.length === 0){
        return "Invalid"
    }
return users.filter(function(user){
    return user.isActive === true;
});
}
let us = [{name:"A", isActive:true},{name:"B", isActive:false}]

console.log(filterActiveUsers(us))



function hashtags(words){
    let wordgula = words.split(" ")
    let HashtagCount = 0;
    let longestTag = "";
    for(let word of wordgula){
        if(word.startsWith("#")){
            HashtagCount++
            let tag = word.slice(1);
            if(tag.length > longestTag.length){
              longestTag = tag 
            }
        }
    }
    return{
        HashtagCount: HashtagCount,
        longestTag: longestTag
    }
}

let m = "Loving this weather today #sunnyyyyy #vibes #weekend"
console.log(hashtags(m))


function employeeIntroduction(employee) {
    if(typeof employee !== "object" || employee === null){
        return "Invalid"
    }
if(!("name" in employee) || !("age"in employee) || !("position" in employee)){
    return "Invalid"
}
    return `My name is ${employee.name}. I am ${employee.age} years old. I work as a ${employee.position}.`
}

