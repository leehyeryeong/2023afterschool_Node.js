//모듈을 추출합니다
const fs = require('fs');

//파일을 씁니다
fs.writeFileSync('ouput.txt', '안녕하세요!');
console.log('파일 쓰기를 완료했습니다.');