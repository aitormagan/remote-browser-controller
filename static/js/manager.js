(function() {
  $('#url-form').submit(function( event ) {
    event.preventDefault();

    var url = $('#url-input').val();
    $.ajax({
  	  url: "/api/show",
  	  method: 'POST',
      data: JSON.stringify({'web': url}),
      contentType: 'application/json'
    }).done(function() {
      $('#url-input').val('');
      $('#url-info').text(url);
      $('#ok-message').removeClass('hidden');

      setTimeout(function() {
      	$('#ok-message').addClass('hidden');
      }, 5000);
    });
  });
})();