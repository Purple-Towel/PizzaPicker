DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE order (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  ordered_at TIMESTAMP NOT NULL DEFAULT NOW(), /*might need to remove DEFAULT NOW() */
  pickup_time SMALLINT NOT NULL /* arbitrary time (30 minutes, etc.) */
);

