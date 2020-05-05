$(() => {
  $('.login-btn').on('click', () => {
    $.get('/login');
  });

  $('.logout-btn').on('click', () => {
    $.get('/logout');
  });
});
