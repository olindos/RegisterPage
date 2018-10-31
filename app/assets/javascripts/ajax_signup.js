jQuery(function() {
  var validate_url;
  validate_url = '/';
  return $('#new_user, [id^=edit_user_]').validate({
    debug: true,
    rules: {
      'user[email]': {
        required: true,
        remote: {
          url: validate_url,
          type: 'post'
        }
      },
      'user[nickname]': {
        required: true,
        remote: {
          url: validate_url,
          type: 'post'
        }
      }
    }
  });
});
