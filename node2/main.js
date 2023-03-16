//main.js: 모듈을 불러오는 함수
//생성한 모듈을 다른 자바스크립트 파일에서 모듈을 추출할 때 require
var module = require('./module.js');

console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));