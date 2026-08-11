function generateLeaderboard(students) {
    if (!Array.isArray == students) {
        return "Invalid";
    }

    if (students.length == 0) {
        return "Invalid";
    }
for(let student of students){
    if(!student.name ||  !"score" in students){
        return "Invalid"
    }
    if(typeof student.score !== "number"){
        return "What have u done bruda"
    }
}
    const qualified = students.filter(student => {
        return student.score > 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });
    return names.slice(0, 4);
}
let m = [
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 656 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: "75" },

]
console.log(generateLeaderboard(m))
