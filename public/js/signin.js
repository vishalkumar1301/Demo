$(document).ready(function() {
    $('#submit').on('click', function (e) {
        $('#submit').addClass('disabled');
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: "https://dabbawala-97.herokuapp.com/auth/signin",
            data: {
                email: $('#email').val(),
                password: $('#password').val(),
            }
          }).done(function(data) {
            window.localStorage.setItem('x-auth-token', data.user.token)
            window.location.href = window.location.origin + '/home';
            $('#submit').removeClass('disabled');

          }).fail(function(){
              window.alert('Wrong username password');
                $('#submit').removeClass('disabled');

          });
    })
})