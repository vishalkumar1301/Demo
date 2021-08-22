$(document).ready(function() {
    $('#logout').on('click', function() {
        window.localStorage.setItem('x-auth-token', '')
        window.location.href = window.location.origin + '/signin';
    })
});