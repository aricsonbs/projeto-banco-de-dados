CREATE DATABASE feedback_db;

USE feedback_db;

CREATE TABLE feedbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    comments TEXT
);
