let newestOrderID = null;

const createNewOrder = function(userID) {
  const insertString = `
  INSERT INTO orders (customer_id)
  VALUES ($1)
  RETURNING id;
  `;

  const inputs = [userID];

  return query(insertString, inputs)
  .then(res => res.rows[0])
  .then(newestOrderID = res);
  // should return the id of the newly created order and set newestOrderID as that value
};

const createLineItem = function(lineOrderFromMemory) {
  const dishID = lineOrderFromMemory[0][id]; // gets the id key from the dish object to insert into the query
  const quantity = lineOrderFromMemory[1];

  const insertString = `
  INSERT INTO order_lines (order_id, dish_id, quantity)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

  const inputs = [newestOrderID, dishID, quantity];
  return query(insertString, inputs)
  .then(res => res.rows);
};

const createLineItems = function(cartItems) {
  for (let item of cartItems) {
    createLineItem(item);
  }
};
