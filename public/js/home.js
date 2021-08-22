$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: "http://localhost:8000/home",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('x-auth-token'),
        }
    }).fail(function(data, a){
        window.location.href = window.location.origin + '/signin';
    });
});