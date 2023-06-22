-- Your SQL goes here
CREATE TABLE users (
  email VARCHAR PRIMARY KEY NOT NULL,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  spoonacular_password VARCHAR NOT NULL,
  hash VARCHAR NOT NULL
)