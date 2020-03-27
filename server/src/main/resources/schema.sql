CREATE TABLE user (
    id int PRIMARY KEY AUTO_INCREMENT,
    account_id varchar(64),
    password varchar(64),
    name varchar(64),
    birthday date,
    is_male boolean,
    email varchar(64),
    phone_number varchar(64)
);
