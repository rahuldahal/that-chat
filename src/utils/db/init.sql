CREATE DATABASE thatChat;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE user(
    user_id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL,
    avatar VARCHAR(128)
);