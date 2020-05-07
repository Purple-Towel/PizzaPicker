$('.confirm-button').on('click', function(event) {
  event.preventDefault();
    $.post('/restaurantView/smstoClient', () => {})
  });
