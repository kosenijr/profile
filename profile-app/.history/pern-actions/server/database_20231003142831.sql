CREATE DATABASE pern_actions;

CREATE TABLE userinfo(
    user_id SERIAL PRIMARY KEY, 
    /*used to make each table entry unique cf. reactjs loops; automatically increases for each subsequent entry*/
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);

SELECT MAX(user_id) FROM userinfo;

DO $$ 
BEGIN
    IF (SELECT MAX(user_id) FROM users) IS NULL THEN
        ALTER SEQUENCE users_user_id_seq RESTART WITH 1;
    END IF;
END $$;