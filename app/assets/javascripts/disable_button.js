function checkParams() {
    var email = $('#email').val();
    var nickname = $('#nickname').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var password = $('#password').val();

     
    if(nickname.length != 0 && email.length != 0 && first_name.length != 0 && last_name.length != 0 && password.length >= 5) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
  console.log
}
