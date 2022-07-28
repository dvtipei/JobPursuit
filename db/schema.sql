DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

DROP DATABASE IF EXISTS registration_db;
CREATE DATABASE registration_db;

USE registration_db;

CREATE TABLE users (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (id, email, password)
