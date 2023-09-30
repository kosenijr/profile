CREATE DATABASE pern_actions;

SELECT * FROM pg_stat_activity WHERE pid <> pg_backend_pid() AND waiting;


DROP TABLE todo;

CREATE TABLE email(
    email_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);