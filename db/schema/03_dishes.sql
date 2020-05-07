DROP TABLE IF EXISTS dishes CASCADE;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description TEXT,
  base_price INTEGER NOT NULL,
  is_pizza BOOLEAN NOT NULL
);
