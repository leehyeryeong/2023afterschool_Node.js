USE mydb;

-- TestTable(int number, char name) 생성해 데이터 입력 후 출력
CREATE TABLE TestTable (
number INT(20),
name VARCHAR(20),
primary key (number));

INSERT INTO TestTable VALUES(1, 'kim');
INSERT INTO TestTable VALUES(2, 'lee');
INSERT INTO TestTable VALUES(3, 'park');

SELECT * FROM TestTable;

ALTER TABLE TestTable CHANGE name str_name VARCHAR(20);
DESC TestTable;
