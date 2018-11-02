$(document).ready(function() {
  $('input').on('blur', function() {
    if ($("#new_user").valid()) {
      $('#submit').prop('disabled', false);  
    } else {
      $('#submit').prop('disabled', 'disabled');
    }
  });
});
