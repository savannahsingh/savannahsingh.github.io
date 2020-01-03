$('form').on('submit', function(e) {
  e.preventDefault();

  var pokemon = $('input[type=text]').val().replace(' ','');
  console.log(stats);
})
