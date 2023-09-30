CREATE DATABASE pern_actions;

DROP TABLE todo;

CREATE TABLE email(
    email_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);