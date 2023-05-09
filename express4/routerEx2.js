//라우팅 매개변수 추출
var express = require('express');

//서버를 생성합니다
var app = express();

//라우터를 설정합니다
//expressjs.com - guide - routing 참고
app.get('/users/:userId/:bookId', function(request, response) {
  //1) 변수 선언
  //let user = request.params.userId;
  //let book = request.params.bookId;
  //response.send('<h1>' + user + book + ' Page</h1>');
  //2) req.params;
  response.send(request.params);
});

//서버를 실행합니다
app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});