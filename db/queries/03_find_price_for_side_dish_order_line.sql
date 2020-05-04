SELECT dishes.name AS item, order_lines.quantity, (order_lines.quantity * dishes.base_price) AS total_price
FROM order_lines
JOIN dishes ON dish_id = dishes.id
GROUP BY dishes.name, order_lines.quantity, dishes.base_price, dishes.is_side_dish
HAVING dishes.is_side_dish = true;
