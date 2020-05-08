$('.add-pizza').on('submit', function(event) {

  // prevent the form from being submitted
  event.preventDefault();

  // Grab all the info from the input fields

  const pizzaID = this.elements.pizzaID.value;
  const pizzaName = this.elements.pizzaName.value;
  let pizzaPrice = Number(this.elements.pizzaPrice.value);

  const selectPizzaSize = this.elements.pizzaSize;
  const pizzaSize = selectPizzaSize.options[selectPizzaSize.selectedIndex].value;

  const selectPizzaCrust = this.elements.pizzaCrust; // name attribute
  const pizzaCrust = selectPizzaCrust.options[selectPizzaCrust.selectedIndex].value;

  switch (pizzaSize) {
  case 'm':
    pizzaPrice += 400;
    break;
  case 'l':
    pizzaPrice += 1000;
    break;
  }

  switch (pizzaCrust) {
  case 'regular':
    pizzaPrice += 200;
    break;
  case 'stuffed':
    pizzaPrice += 500;
    break;
  }

  const pizzaItem = {
    ID: pizzaID,
    name: pizzaName,
    price: pizzaPrice / 100,
    options: {
      size: pizzaSize,
      crust: pizzaCrust
    }
  };

  addItemToOrder(pizzaItem, 1);

  $(this).parent().parent().addClass('added');
});

$('.add-side').on('submit', function(event) {

  // prevent the form from being submitted
  event.preventDefault();

  // Grab all the info from the input fields

  const sideID = this.elements.sideID.value;
  const sideName = this.elements.sideName.value;
  const sidePrice = Number(this.elements.sidePrice.value);

  const sideItem = {
    ID: sideID,
    name: sideName,
    price: sidePrice / 100
  };

  addItemToOrder(sideItem, 1);

  $(this).parent().parent().addClass('added');
});
