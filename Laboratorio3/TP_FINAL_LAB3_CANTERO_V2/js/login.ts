class login{

    validarFormOnSubmit():void{
        let usuario = $('#inputEmail').val();
        let password = $('#inputPassword').val();
        let formData = {
                'nombre':usuario,
                'apellido':password
            };
    
        $.ajax({
            url: 'http://agustincantero.com/UtnFRA/Programacion3/TP_FINAL_PROG3_CANTERO/login',
            type: 'POST',
            data: formData,
            success: function (result) {
                if(result){
                    window.location.replace('http://agustincantero.com/UtnFRA/Laboratorio3/TP_FINAL_LAB3_CANTERO/grilla.html');
                }
                
            }
        });
    }
}

