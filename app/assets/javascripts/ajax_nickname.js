$(document).ready(function(){
  $('#user_nickname').blur(function(){
      $.post('/check_nickname', 
         {"nickname": $('#user_nickname').val()}, 
         function(data){
             if(data.nickname == "found"){
                 console.log('nickname already in use');
             }
         }, 'json');
  });
});
