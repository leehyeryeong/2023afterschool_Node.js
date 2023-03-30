//모듈을 추출합니다.
let fs = require('fs');
let http = require('http');

//52273번 포트에 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
  //이미지 파일을 읽습니다.
  fs.readFile('1.jpg', function(error, data) {
    response.writeHead(200, {'Content-Type': 'image/jpg'});
    response.end(data);
  });
}).listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});