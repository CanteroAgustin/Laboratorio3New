"use strict";
var login = /** @class */ (function () {
    function login() {
    }
    login.prototype.validarFormOnSubmit = function () {
        var usuario = $('#inputEmail').val();
        var password = $('#inputPassword').val();
        var formData = {
            'nombre': usuario,
            'apellido': password
        };
        $.ajax({
            url: 'http://agustincantero.com/UtnFRA/Programacion3/TP_FINAL_PROG3_CANTERO/login',
            type: 'POST',
            data: formData,
            success: function (result) {
                if (result) {
                    window.location.replace('http://agustincantero.com/UtnFRA/Laboratorio3/TP_FINAL_LAB3_CANTERO/grilla.html');
                }
            }
        });
    };
    return login;
}());
