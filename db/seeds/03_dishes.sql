/* ------------------------- PIZZAS -------------------------*/

INSERT INTO dishes (name, image_url, description, base_price, is_side_dish)

VALUES

('Papa-Ronnie Pizza', 'IMG', 'DESC', 1000, false),
('Pizza Cube', 'IMG', 'DESC', 10000, false),
('Pineapple Pizza', 'IMG', 'DESC', 2147483647, false),
('Asbestos Pizza, now with Fibreglass', 'IMG', 'DESC', 8100, false);

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
('l', 'regular', 150, 4);




-- /* ------------------------- SIDE DISHES -------------------------*/

INSERT INTO dishes (name, image_url, description, base_price, is_side_dish)

VALUES

('Pegasus Wings', 'IMG', 'DES', 2200, true),
('Cheese Wheel', 'IMG', 'DES', 2250, true),
('Garlic with Hot Sauce', 'IMG', 'DES', 2500, true);
