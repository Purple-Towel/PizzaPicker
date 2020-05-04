/* ------------------------- PIZZAS -------------------------*/

INSERT INTO dishes (name, image_url, description, base_price, is_side_dish)

VALUES

('Papa-Ronnie Pizza', '/images/pepperoni.png', 'Pepperoni, pepperoni, pepperoni & pepperoni', 1000, false),
('JUST CHEESE Pizza', '/images/cheesePizza.png', 'Cheese, cheese, cheese & cheese', 600, false),
('Vegan Deluxe Pizza', '/images/vegan.png', 'Vegis, vegis, vegis & vegis', 1200, false),
('Pineapple Pizza', '/images/pineapplePizza.png', 'pineapple, pineapple, pineapple & pineapple', 2147483647, false),
('Pizza Cube©', '/images/PizzaCube.gif', 'cube, cube, cube & cube', 10000, false),
('Asbestos Pizza, with Fibreglass', '/images/spacePizza.png', 'filler', 8100, false);

INSERT INTO options (size, crust, price, dish_id)

VALUES

('s', 'thin', 250, 1),
('m', 'thin', 2500, 1),
('l', 'thin', 25000, 1),
('s', 'regular', 50, 1),
('m', 'regular', 100, 1),
('l', 'regular', 150, 1),
('s', 'thin', 250, 2),
('m', 'thin', 2500, 2),
('l', 'thin', 25000, 2),
('s', 'regular', 50, 2),
('m', 'regular', 100, 2),
('l', 'regular', 150, 2),
('s', 'thin', -250, 3),
('m', 'thin', -2500, 3),
('l', 'thin', -25000, 3),
('s', 'regular', -50, 3),
('m', 'regular', -100, 3),
('l', 'regular', -150, 3),
('s', 'thin', 250, 4),
('m', 'thin', 2500, 4),
('l', 'thin', 25000, 4),
('s', 'regular', 50, 4),
('m', 'regular', 100, 4),
('l', 'regular', 150, 4),
('s', 'thin', 250, 5),
('m', 'thin', 2500, 5),
('l', 'thin', 25000, 5),
('s', 'regular', 50, 5),
('m', 'regular', 100, 5),
('l', 'regular', 150, 5),
('s', 'thin', 250, 6),
('m', 'thin', 2500, 6),
('l', 'thin', 25000, 6),
('s', 'regular', 50, 6),
('m', 'regular', 100, 6),
('l', 'regular', 150, 6);




-- /* ------------------------- SIDE DISHES -------------------------*/

INSERT INTO dishes (name, image_url, description, base_price, is_side_dish)

VALUES

('Pegasus Wings', '/images/chicken.png', 'Wings, wings, wings & wings', 2200, true),
('Cheese Wheel', '/images/cheese.png', 'Cheese, cheese, cheese & wheel', 2250, true),
('Garlic with Hot Sauce', '/images/garlic.png', 'Garlic, garlic, garlic & sauce', 2500, true);
