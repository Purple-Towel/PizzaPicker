$('.add-pizza').on('submit', function(event) {

// prevent the form from being submitted
  event.preventDefault();

// Graph all the info from the input fields

  const pizzaID = this.elements.pizzaID.value;
  const pizzaName = this.elements.pizzaName.value;

  const selectPizzaSize = this.elements.pizzaSize;
  const pizzaSize = selectPizzaSize.options[selectPizzaSize.selectedIndex].value;

  const selectPizzaCrust = this.elements.pizzaCrust; // name attribute
  const pizzaCrust = selectPizzaCrust.options[selectPizzaCrust.selectedIndex].value;

  const cartItem = {
    dishID: pizzaID,
    dishName: pizzaName,
    options : {
      size: pizzaSize,
      crust: pizzaCrust
    },
    quantity: 1
  }

  orderDatabase.push(cartItem);

})

