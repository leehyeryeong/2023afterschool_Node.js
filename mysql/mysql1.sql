-- mydb 사용
use mydb;
create table if not exists users (
id varchar(40) not null,
password varchar(40) not null,
primary key (id));

-- 데이터 삽입
insert into users value('kim', '1234');
select * from users;

commit;

alter user 'root'@localhost identified with mysql_native_password by '1234';
alter user 'lee'@localhost identified with mysql_native_passowrd by '5678';