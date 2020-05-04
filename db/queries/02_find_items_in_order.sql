SELECT orders.id AS order_number, dishes.name AS item_name, order_lines.quantity
FROM orders
JOIN order_lines ON order_id = orders.id
JOIN dishes ON dish_id = dishes.id
GROUP BY orders.id, dishes.name, order_lines.quantity;
