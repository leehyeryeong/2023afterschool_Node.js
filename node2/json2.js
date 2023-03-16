//JSON 객체에서 값을 추출하려면 [] 또는 . 연산자를 이용한다.

const user = {name: "kim", age: 31};
console.log('user: ', user);
console.log('user.name: ', user.name);
console.log('user.age: ', user.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user);

const fieldName = 'age';
console.log(user[fieldName]);