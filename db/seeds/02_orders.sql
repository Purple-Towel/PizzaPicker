INSERT INTO orders (customer_id, ordered_at, pickup_time)
VALUES
(1, NULL, 30);
/*Only one test order with one user for demo*/

UPDATE orders SET ordered_at = NOW()
