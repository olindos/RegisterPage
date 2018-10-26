function checkParams() {
  var email = $('#user_email').val();
  var nickname = $('#user_nickname').val();
  var first_name = $('#user_first_name').val();
  var last_name = $('#user_last_name').val();
  var password = $('#user_password').val();
  
  if(nickname.val && email.val && first_name.val && last_name.val && password.length >= 5) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }

}
