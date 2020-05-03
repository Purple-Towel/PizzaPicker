$(() => {
  $('.login-btn').on('click', () => {
    $.ajax({
      method: "GET",
      url: '/login/:id'
    });
  });
});
