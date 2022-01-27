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
  name VARCHAR(100),
  title VARCHAR(30),
  product_type VARCHAR(30),
  description VARCHAR(140),
  price VARCHAR(10),
  seller_id INTEGER REFERENCES devpop_users(id)
);

 -- Add img to products table if able to upload

-- Insert some example data for us to test with

DROP TABLE IF EXISTS sessions CASCADE;

CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data JSON NOT NULL
);

INSERT INTO sessions (sid, data) VALUES (
  'abc123',
  '{"test":"stuff"}'
);

INSERT INTO devpop_users (name, email, password) VALUES
  ('Milly', 'milly@milly.com', 123),
  ('Orian', 'orian@orian.com', 123),
  ('Juliette', 'juliette@juliette.com', 123),
  ('Miah', 'miah@miah.com', 123)
;

INSERT INTO products (title, product_type, description, price) VALUES
  ('Top', 'top', 'very sparkly red top', 20),
  ('Trousers', 'trousers','very green trousers', 15),
  ('Shoes', 'shoes', 'very un-sparkly blue shoes', 5),
  ('Hoodie', 'jumper', 'vintage pink hoodie', 60)
;

COMMIT;