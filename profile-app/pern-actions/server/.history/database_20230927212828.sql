CREATE DATABASE pern_actions;

CREATE TABLE info(
    info_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    message TEXT NOT NULL

);