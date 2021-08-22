$(document).ready(function() {

    let token = window.localStorage.getItem('x-auth-token');
    console.log('x-auth-token', token);
    $('.result').text('x-auth-token: ' + token);

    $('#logout').on('click', function() {
        window.localStorage.setItem('x-auth-token', '')
        window.location.href = window.location.origin + '/signin';
    })
});