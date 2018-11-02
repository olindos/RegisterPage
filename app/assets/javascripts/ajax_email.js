$(document).ready(function(){
  $('#user_email').blur(function(){
      $.post('/check_email', 
         {"email": $('#user_email').val()}, 
         function(data){
             if(data.email == "email"){
                 $message =('email already in use');
             }
         }, 'json');
  });
});
