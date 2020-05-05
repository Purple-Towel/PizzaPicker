$(() => {
  $('.login-btn').on('click', () => {
    $('.login-btn').hide();
    $('.logout-btn').show();
    $('.papa-john').slideDown();
    $.get('/login');
  });

  $('.logout-btn').on('click', () => {
    $('.login-btn').show();
    $('.logout-btn').hide();
    $('.papa-john').slideUp();
  });
});
