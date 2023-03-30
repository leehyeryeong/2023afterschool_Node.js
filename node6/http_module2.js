//요청을 받으면 request 이벤트가 발생되고 write() 메소드 등을 이용해 응답 전ㄴ송
//response 객체의 메소드
//writeHead(statusCode [, statusMessage][, headers]): 응답으로 보낼 헤더를 만듭니다.
//write(chunk[, encoding][, callback]): 응답 본문(body) 데이터를 만듭니다. 여러 번 호출될 수 있습니다.
//end([data][, encoding][, callback]): 클라이언트로 응답을 전송합니다.

//on() 메소드: 이벤트 처리하는 기본 메소드
//connection, request, close 이벤트를 처리할 수 있는 콜백함수를 각각 등록하면 상황에 맞게 자동 호출됨
//클라이언트가 요청을 하면 발생하는 request 이벤트를 처리할 수 있게 등록해 둔 콜백 함수에서 res 객체를 사용해서 클라이언트로 응답을 보냄
//응답을 보낼 때는 res 객체의 메소드로 보냄

var http = require('http');
//클라이언트 요청을 받았을 때 응답 보내기
var server = http.createServer();
//웹 서버 객체를 만듭니다.

var port = 3000;
//웹 서버를 시작하여 3000번 포트에서 대기하도록 합니다.

server.listen(port, function() {
  console.log('웹 서버가 시작되었습니다.: %d', port);
});

//클라이언트 연결 이벤트 처리
server.on('request', function(req, res) {
  console.log('클라이언트 요청이 들어왔습니다.');

  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write(" <head>");
  res.write("   <title>응답 페이지</title>");
  res.write(" </head>");
  res.write(" <body>");
  res.write("   <h1>Node.js로부터의 응답 페이지</h1>");
  res.write(" </body>");
  res.write("</html>");
  res.end();
});