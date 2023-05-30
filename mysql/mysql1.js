const mysql = require('mysql');

//createConnection()에 자신의 DB 정보를 입력한다
const connection = mysql.createConnection({
  host: 'localhost',  //db ip address
  port: 3306,         //db port number
  user: 'lee',        //db id
  password: '5678',   //db password
  database: 'mydb'    //db schema name
});

//1) DB 연결 테스트
connection.connect(function(err) {
  if(err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  } else {
    console.log("연결에 성공하였습니다.");
  }
});

