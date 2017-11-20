(function() {
  var socket = io.connect();
  socket.on('new_web', function(data) {
    $('#iframe').attr('src', data.web);

    $('#iframe').on('load', function() {
      var length = $('#iframe')[0].contentWindow.length;
      //if (length == 0) {
      //	$('#iframe').attr('src', '/web/error.html');
      //}
      console.log($('#iframe')[0].contentWindow.innerHTML)
    });

   });
})();