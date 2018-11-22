function validarFormOnSubmit(){
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    var formData = {
            'email':email,
            'password':password
        };

    $.ajax({
        url: 'http://agustincantero.com/UtnFRA/Programacion3/TP_FINAL_PROG3_CANTERO/login',
        type: 'POST',
        data: formData,
        success: function (result) {
            if(result){
                window.localStorage.setItem("token", result);
                window.location.replace('http://agustincantero.com/UtnFRA/Laboratorio3/TP_FINAL_LAB3_CANTERO/grilla.html');
            }
        },
        error: function (request, status, error) {
            $('#error').text(request.responseJSON.error);
        }
    });
    event.preventDefault();
}