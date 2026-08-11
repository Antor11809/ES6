function studentIntroduction(student) {

    if (typeof student !== "object" || student === null) {
        return "Invalid";
    }

    if (!("name" in student) || !("age" in student) || !("course" in student)) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

function filterActiveUsers(users) {

    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }
    for (let user of users) {
        if (typeof user !== "object" || user === null || !("isActive" in user)) {
            return "Invalid";
        }
    }
    return users.filter(user => user.isActive === true);
}

function countHashtags (caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }
    let words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";
    for (let word of words) {
        if (word.startsWith("#")) {
            hashtagCount++;

            let tag = word.slice(1);

            if (tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }

    return {
        hashtagCount: hashtagCount,
        longestTag: longestTag
    };
}

function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }
    for (let score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }
    let updatedScores = scores.map(function(score) {
        return score + 10;
    });
    return updatedScores.reduce(function(sum, score) {
        return sum + score;
    }, 0);
}


function generateLeaderboard(students) {

    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (!student.name || !("score" in student)) {
            return "Invalid";
        }

        if (typeof student.score !== "number") {
            return "Invalid";
        }
    }

    let qualified = students.filter(function(student) {
        return student.score >= 70;
    });

    let names = qualified.map(function(student) {
        return student.name.toUpperCase();
    });

    return names.slice(0, 3);
}
console.log()