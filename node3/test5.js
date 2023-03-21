//모듈 파일을 불러들인 후 add 함수 호출
//require 함수를 이용해 모듈 파일을 불러들임
//불러들인 결과 객체는 exports 객체로 간주할 수 있음
//require 함수에서 해당 파일이 없으면, 같은 이름의 폴더를 찾아 그 폴더 안에 들어있는 index.js 파일을 불러들임

var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과: %d', calc.add(10, 10));