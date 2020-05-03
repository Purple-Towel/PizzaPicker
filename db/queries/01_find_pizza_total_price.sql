SELECT dishes.name AS pizza_name, SUM(base_price + options.price) AS total_cost
FROM dishes
JOIN options ON dish_id = dishes.id
WHERE options.size = 'l' AND options.crust = 'regular' AND dishes.name = 'Pizza Cube'
GROUP BY dishes.name;
