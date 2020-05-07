$('.checkout-button').on('click', function() {
  if ($('.logout-btn').is(':visible')) {
    $('.checkout-msg')
      .text('Your order has been placed. Thank you for choosing Pizza Planet!')
      .addClass('checkout-success')
      .slideDown();
      console.log(orderInMemory);
      $.ajax({
        type: "POST",
        data: { orderInMemory },
        url: "/cart"
      })

  } else {
    $('.checkout-msg')
      .text('Please login to process order.')
      .addClass('checkout-error')
      .slideDown();
  }
});

$('.checkout-button').on('click', function(event) {
  event.preventDefault();
  if ($('.logout-btn').is(':visible')) {
    $.post('/cart/smstoRestaurant', () => {})
  }
});




