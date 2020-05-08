const renderCart = function(order) {
  $('.right').empty();
  $('.total').empty();
  $('#cart-info').empty();

  for (let dish of order) {
    const $orderLine = $('<tr>');

    let $product;
    if (dish[0].ID < 7) {
      $product = $('<td>').text(`${dish[0].name} (${dish[0].options.size}, ${dish[0].options.crust})`);
    } else {
      $product = $('<td>').text(dish[0].name);
    }

    const $price = $('<td>').text(`$${dish[0].price}`);
    const $quantity = $('<td>').text(dish[1]);
    const $total = $('<td>').text(`$${(dish[0].price * dish[1])}`);

    $orderLine.append($product).append($price).append($quantity).append($total);
    $('#cart-info').append($orderLine);
  }

  const subtotal = sumOrderPrice(order);
  const $subtotal = $('<p>').text(`$${subtotal}`);
  const $delivery = $('<p>').text('$4.99');
  $('.right').append($subtotal).append($delivery);

  const $total = $('<p>').text(`$${(subtotal + 4.99).toFixed(2)}`);
  $('.total').append('<p>Total<p>').append($total);
};

$('.order-button').on('click', () => {
  renderCart(orderInMemory);
  $('.cart-title').show();
  $('.cart-slidedown').show();
  window.scrollTo(0, 2650);
});


