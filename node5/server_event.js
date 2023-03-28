let http = require('http');

let host = '10.96.124.137';
let port = 3000;
let server = http.createServer();

server.listen(port, host, '50000', function() {
  console.log('웹 서버가 시작되었습니다.: %s, %d', host, port);
});