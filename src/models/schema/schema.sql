DROP DATABASE IF EXISTS new_bookstore;
CREATE DATABASE new_bookstore;

\c new_bookstore

DROP TABLE IF EXISTS book;
CREATE TABLE IF NOT EXISTS book(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  summary TEXT,
  price VARCHAR(255),
  images VARCHAR(255),
  publisher VARCHAR(255),
  ISBN VARCHAR(255));

DROP TABLE IF EXISTS member;
CREATE TABLE IF NOT EXISTS member(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name  VARCHAR(255),
  email VARCHAR(225) UNIQUE,
  username VARCHAR(225) UNIQUE,
  password VARCHAR(255));

DROP TABLE IF EXISTS review;
CREATE TABLE IF NOT EXISTS review(
  id SERIAL PRIMARY KEY,
  book_id INTEGER REFERENCES book(id),
  member_id INTEGER REFERENCES member(id));

DROP TABLE IF EXISTS member_role;
CREATE TABLE IF NOT EXISTS member_role(
  member_id INTEGER REFERENCES member(id),
  admin VARCHAR(255) NOT NULL,
  clerk VARCHAR(255) NOT NULL,
  reader VARCHAR(255) NOT NULL);
