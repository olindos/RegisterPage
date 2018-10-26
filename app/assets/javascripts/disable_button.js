function checkParams() {
  var email = $('#user_email').val();
  var nickname = $('#user_nickname').val();
  var first_name = $('#user_first_name').val();
  var last_name = $('#user_last_name').val();
  var password = $('#user_password').val();
  
  if(nickname.length != 0 && email.length != 0 && first_name.length != 0 && last_name.length != 0 && password.length >= 5) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
console.log
}
