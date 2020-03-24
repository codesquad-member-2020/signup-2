CREATE TABLE user (
    id int identity,
    account_id varchar(64),
    password varchar(64),
    name varchar(64),
    birthday datetime,
    is_male boolean,
    email varchar(64),
    phone_number varchar(64),
    interest varchar(64),
    created_date datetime);
