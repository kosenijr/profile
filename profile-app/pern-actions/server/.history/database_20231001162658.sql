CREATE DATABASE pern_actions;

CREATE TABLE userinfo(
    user_id SERIAL PRIMARY KEY,  /*used to make each table entry unique cf. react*/
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);