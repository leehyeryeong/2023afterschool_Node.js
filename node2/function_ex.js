const students = [
    {name: "kyeongrok", age: 31, score:  85},
    {name: "jihyun", age: 31, score: 95},
    {name: "minsup", age: 35, score: 76}, 
];

function getDegree(score) {
    if(score>=90) {
        return 'A';
    } else if(score>=80) {
        return 'B';
    } else if(score>=60) {
        return 'C';
    }
    return 'F';
}

students.forEach((students) => {
    const result = `name: ${students.name}, score: ${getDegree(students.score)}`;
    console.log(result);
});