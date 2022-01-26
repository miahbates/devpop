BEGIN;

DROP TABLE IF EXISTS devpop_users, products CASCADE;

-- Create tables and define their columns

CREATE TABLE devpop_users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(30),
  password TEXT NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  seller_id INTEGER REFERENCES devpop_users(id),
  name VARCHAR(30),
  description VARCHAR(140),
  price VARCHAR(10)
);

 -- Add img to products table if able to upload

-- Insert some example data for us to test with

INSERT INTO devpop_users (name, email, password) VALUES
  ('Milly', 'milly@milly.com', 123),
  ('Orian', 'orian@orian.com', 123),
  ('Juliette', 'juliette@juliette.com', 123),
  ('Miah', 'miah@miah.com', 123)
;

INSERT INTO products (name, description, price) VALUES
  ('Top','very sparkly red top', 20),
  ('Trouser','very green trousers', 15),
  ('Shoes','very un-sparkly blue shoes', 5),
  ('Hoodie','vinatge pink hoodie', 60)
;

COMMIT;