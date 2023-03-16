//자바스크립트에서 오브젝트를 표현하는 방법
//{key: value}으로 표현

const user = {};
user.name = "kyeongrok";
user.age = 31;

console.log(user);

//key에 해당하는 값에 원래는 ""를 붙여야 하지만 편의상 붙여주지 않아도 됩니다.
const user2 = {name: "kyeongrok", age: 31};
console.log(user2);