CREATE TABLE user (
    id int identity,
    account_id varchar(64) NOT NULL,
    password varchar(64) NOT NULL,
    name varchar(64) NOT NULL,
    birthday datetime NOT NULL,
    is_male boolean NOT NULL,
    email varchar(64) NOT NULL,
    phone_number varchar(64) NOT NULL,
    created_date datetime NOT NULL
);
