$('.checkout-button').on('click', function() {
  if ($('.logout-btn').is(':visible')) {
    $('.checkout-msg')
      .text('Your order has been placed. Thank you for choosing Pizza Planet!')
      .addClass('checkout-success')
      .slideDown();
  } else {
    $('.checkout-msg')
      .text('Please login to process order.')
      .addClass('checkout-error')
      .slideDown();
  }
});
