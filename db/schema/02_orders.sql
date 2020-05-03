DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  ordered_at TIMESTAMP DEFAULT NOW(), /*might need to remove DEFAULT NOW() */
  ready_for_pickup BOOLEAN NOT NULL DEFAULT FALSE /* now a boolean that is false when an order is created, our web app will update the pickup status with a timer */
);

