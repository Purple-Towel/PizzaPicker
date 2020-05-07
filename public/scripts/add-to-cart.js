$('.add-dish').on('submit', function(event) {

// prevent the form from being submitted
  event.preventDefault();

// Grab all the info from the input fields

  const dishID = this.elements.dishID.value;
  // const dishName = this.elements.dishName.value;

  addItemToOrder(Number(dishID - 1), 1);

})

