const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'lee',
  password : '5678',
  database : 'mydb'
});

connection.connect(function(err) {
  if(err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  } else {
    console.log("연결에 성공했습니다.");
    //testtable에 삽입
    var sql2 = "INSERT INTO TestTable VALUES(?, ?)";

    var input_data1 = [4, "choi"];
    connection.query(sql2, input_data1, function(err) {
      console.log("삽입 완료 1");
    });

    //testtable 수정
    var sql = "UPDATE TestTable set str_name=? where number=?";
    var update_data = ["김길동", 1];
    connection.query(sql, update_data, function(error) {
      console.log("수정 완료");
    });

    //testtable 삭제
    var sql3 = "DELETE FROM TestTable WHERE number=?";
    var delete_data = [5];
    connection.query(sql3, delete_data, function(error) {
      console.log("삭제 완료");
    });

    //testtable 출력
    var sql1 = "select * from testtable";
    connection.query(sql1, function(err, rows) {
      for(var obj of rows) {
        console.log('번호: ', obj.number);
        console.log('이름: ', obj.str_name);
      }
    });
    connection.end();
  }
});