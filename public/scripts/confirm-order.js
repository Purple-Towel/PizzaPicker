// $('.confirm-button').on('click', function(event) {
//   event.preventDefault();
//     $.post('/restaurantView/smstoClient', () => {})
//   });

$('#place-button').on('submit', function(event) {
  event.preventDefault();
  const time = this.elements.orderTime.value
    $.post('/restaurantView/smstoClient', {time:time}, () => {})
});

$('.confirm-button').on('click', function(event) {
  $('.confirm-msg')
  .text('Order has been confirmed. Text has been sent to client!')
  .slideDown();
});
