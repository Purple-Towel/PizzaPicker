SELECT dishes.name AS pizza_name, SUM(base_price + options.price) AS total_cost
FROM dishes
JOIN options ON dish_id = dishes.id
WHERE options.size = 's' AND options.crust = 'thin' AND dishes.id = 1
GROUP BY dishes.name;
