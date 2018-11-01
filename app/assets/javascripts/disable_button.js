$(document).ready(function() {
     $(':input[type="submit"]').prop('disabled', true);
     $('.form-control').keyup(function() {
        if($(this).val() != '') {
           $(':input[type="submit"]').prop('disabled', false);
        }
     });
 });
/*
var form1 = $(".form-control");
  if (form1.valid()) {
    $("#submit").removeAttr("disabled");
  } else {
    $("#submit").attr("disabled", "disabled");
  }
*/
