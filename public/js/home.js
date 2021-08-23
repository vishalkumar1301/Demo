$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: "https://dabbawala-97.herokuapp.com/home",
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('x-auth-token'),
        }
    }).done( function (data) {
        console.log('Headers: ', data);
        $('.headerResult').text('Headers: ' + JSON.stringify(data));
    }).fail(function(data, a){
        window.location.href = window.location.origin + '/signin';
    });
});