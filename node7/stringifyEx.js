const userList = [
  {name: '홍길동', age: 50, address: '서울시'},
  {name: '이길동', age: 40, address: '인천시'},
];
const fs = require('fs');

fs.writeFile('./mlist.json', JSON.stringify(userList), function(error) {
  console.log('저장 완료');
});