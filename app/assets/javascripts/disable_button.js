$(document).ready(function() {
     $(':input[type="submit"]').prop('disabled', true);
     $('.form-control').keyup(function() {
        if($(this).val().valid) {
           $(':input[type="submit"]').prop('disabled', false);
        }
     });
 });
