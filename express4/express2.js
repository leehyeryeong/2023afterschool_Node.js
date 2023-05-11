//Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

//Express의 미들웨어 불러오기
var bodyParser = require("body-parser");
//var static  = require('serve-static');
app.use('요청 경로', express.static('실제 경로'));
app.use('/', express.static(path.join(__dirname, 'public')));

//익스프레스 객체 생성

//기본 속성 설정
app.set('port', process.env.PORT||3000);

//body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended: false}));

//body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

//라우터 사용하여 라우팅 함수 등록
var router = express.Router();

router.route('/process/login/:name').post(function(req, res) {
  console.log('/process/login/:name 처리함.');
  
  var paramName = req.params.name;

  var paramId = req.body.id||req.query.id;
  var paramPassword = req.body.password||req.query.password;
  
  res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
  res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
  res.write('<div><p>Param id: '+paramId+'</p></div>');
  res.write('<div><p>Param password: '+paramPassword+'</p></div>');
  res.write("<br><br><a href='/public/login3.html'>로그인 페이지로 돌아가기</a>");
  res.end();
});

app.use('/', router);

//등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', function(req, res) {
  res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

//Express 서버 시작
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port' + app.get('port'));
});

//컨텐츠 요청 주소와 실제 컨텐츠의 경로를 다르게 만들 수 있음
//요청 주소 localshot:3000/stylesheet/style.css
//실제 컨텐츠 경로 /public/stylesheet/style.css
//서버의 구조를 파악하기 어려워져서 보안에 도움이 됨