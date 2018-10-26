// ### Additional validation methods ###
// true if first symbol is a-z or A-Z letter
jQuery.validator.addMethod("rulettersonly", function(value, element) {
  return this.optional(element) || /^[а-я]+$/i.test(value);
}, "Letters only please");

// true if first symbol is a-z or A-Z letter and other symbols are letters or numbers
jQuery.validator.addMethod("letterfirstonly", function(value, element) {
  return this.optional(element) || /^[a-z]\w*$/i.test(value);
}, "First symbol letter only please");

$(document).ready(function() {
  $('#new_user').validate({
    rules: {
      'user[nickname]': {
        required: true,
        letterfirstonly: true
      },
      'user[first_name]': {
        required: false,
        rulettersonly: true
      },
      'user[last_name]': {
        required: false,
        rulettersonly: true
      },
      'user[email]': {
        required: true,
        email: true
      },
      'user[password]': {
        required: true,
        minlength: 5
      }
    },
    messages: {
      'user[nickname]': {
        required: "Необходимо ввести никнейм",
        letterfirstonly: "Никнейм должен начинаться с буквы, используйте только латинский алфавит"
      },
      'user[first_name]': {
        required: false,
        rulettersonly: "Используйте только буквы русского алфавита"
      },
      'user[last_name]': {
        required: false,
        rulettersonly: "Используйте только буквы русского алфавита"
      },
      'user[email]': {
        required: "Введите ваш e-mail",
        email: "Введите корректный e-mail"
      },
      'user[password]': {
        required: "Введите пароль",
        minlength: "Пожалуйста, введите пароль длиннее 5 символов"
      },
      success: function(label) {
        label.addClass("valid").text("Ok!")
      },
      errorPlacement: function(error) {
        $("#response").html(error);
      }
    },
    onkeyup: true
  })
})
