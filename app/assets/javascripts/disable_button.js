jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

var form = $( ".form-control" );
if (form.validate()) {
  $( "#submit" ).removeAttr( "disabled" );
} else {
  $( "#submit" ).attr( "disabled", "disabled" );
}
