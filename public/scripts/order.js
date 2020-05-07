let orderInMemory = [];

// test data until the DB connection works
// let menuItemsInMemory = [{name: 'pizza with cheese', price: 1099}, {name: 'pizza without cheese', price: 1525}, {name: 'pizza with more pizza', price: 1050}];

// add item is working fine

const addItemToOrder = function(menuItem, quantity) {
  orderInMemory.push([menuItem, quantity]);
  console.log(orderInMemory)
};

// edit quantity is working fine

const editItemQuantity = function(arrayIndex, quantity) {
  orderInMemory[arrayIndex][1] = quantity;
};

// remove item is working fine

const removeItem = function(arrayIndex) {
  orderInMemory.splice(arrayIndex, 1);
};


const sumOrderPrice= function(order) {
  let total = 0;
  for (let item of order) {
    total += Number(item[0].price);
  }
  return total;
}
