create table member(
user_id varchar2(20) primary key,
user_name varchar2(20) not null,
user_pw varchar2(20) not null,
address1 varchar2(50) not null,
address2 varchar2(50) not null,
address3 varchar2(50) not null,
user_phone varchar2(30) not null,
user_email varchar2(30) not null,
user_resp varchar2(20) default user
);

