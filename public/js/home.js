$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: "https://dabbawala-97.herokuapp.com/home",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('x-auth-token'),
        }
    }).fail(function(data, a){
        window.location.href = window.location.origin + '/signin';
    });
});