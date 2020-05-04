$(() => {
  $('.login-btn').on('click', () => {
    $('.login-btn').hide();
    $('.logout-btn').show();
    $('.papa-john').show();
    $.get('/login');
  });

  $('.logout-btn').on('click', () => {
    $('.login-btn').show();
    $('.logout-btn').hide();
    $('.papa-john').hide();
  });
});
