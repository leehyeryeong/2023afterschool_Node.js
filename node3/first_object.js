function plus(a, b) {
  return a+b;
}
function minus(a, b) {
  return a-b;
}

//변수에 함수를 지정 가능... ()를 붙이지 않고, 함수 이름을 써서 변수에 대입
const p = plus;

console.log('typeof plus: %s', typeof plus);
console.log('typeof p: %s', typeof p);
console.log('10 + 20: %d', p(10, 20));

//함수를 파라매터로 받는 함수
function calculate(a, b, func) {
  return func(a, b);
}

//함수를 넘겨서 계산함
console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));