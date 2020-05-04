SELECT dishes.name AS item, options.size, options.crust, SUM(dishes.base_price + options.price) AS per_unit_price, order_lines.quantity, (order_lines.quantity * SUM(dishes.base_price + options.price)) AS total_price
FROM order_lines
JOIN dishes ON dish_id = dishes.id
JOIN options ON options_id = options.id
GROUP BY dishes.name, options.size, options.crust, order_lines.quantity;
