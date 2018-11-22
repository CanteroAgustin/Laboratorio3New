"use strict";
var url = 'http://agustincantero.com/UtnFRA/Programacion3/TP_FINAL_PROG3_CANTERO/empleados/';
var Empleados = /** @class */ (function () {
    function Empleados() {
    }
    Empleados.cargarTabla = function () {
        console.log(localStorage.getItem('token'));
        $.ajax({
            url: url,
            headers: { "Authorization": localStorage.getItem('token') },
            type: 'GET',
            success: function (result) {
                $('tbody').html("");
                result.forEach(function (empleado) {
                    $('tbody').append("<tr>");
                    $('tbody').append("<th scope='row'>" + empleado.id + "</td>");
                    $('tbody').append("<td>" + empleado.nombre + "</td>");
                    $('tbody').append("<td>" + empleado.apellido + "</td>");
                    $('tbody').append("<td>" + empleado.puesto + "</td>");
                    $('tbody').append("<td>" + empleado.suspendido + "</td>");
                    $('tbody').append("<td><button type='button' id='editar' onclick='mostrarEditar(" + empleado.id + "," + '"' + empleado.nombre + '"' + "," + '"' + empleado.apellido + '"' + "," + '"' + empleado.puesto + '"' + "," + '"' + empleado.suspendido + '"' + ")'><i class='fas fa-user-edit fa-2x'></i></button></td>");
                    $('tbody').append("<td><button type='button' id='borrar' onclick='borrarEmpleado(" + empleado.id + ")'><i class='fas fa-trash fa-2x'></i></button></td></tr>");
                }, this);
            }
        });
    };
    Empleados.prototype.borrarEmpleado = function (id) {
        $.ajax({
            url: url,
            headers: { "Authorization": localStorage.getItem('token') },
            type: 'DELETE',
            data: { id: id },
            success: function (result) {
                Empleados.cargarTabla();
            }
        });
    };
    Empleados.prototype.mostrarEditar = function (id, nombre, apellido, puesto, suspendido) {
        $("#frmAgregarEmpleado").hide();
        $('#id').val(id);
        $('#nombre').val(nombre);
        $('#apellido').val(apellido);
        $('#puesto').val(puesto);
        $('#suspendido').val(suspendido);
        $("#frmEditarEmpleado").show();
    };
    Empleados.prototype.mostrarAgregar = function (id, nombre, apellido, puesto, suspendido) {
        $("#frmEditarEmpleado").hide();
        $('#nombreAdd').val(nombre);
        $('#apellidoAdd').val(apellido);
        $('#puestoAdd').val(puesto);
        $('#suspendidoAdd').val(suspendido);
        $("#frmAgregarEmpleado").show();
    };
    Empleados.prototype.editarEmpleado = function () {
        var id = $('#id').val();
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var puesto = $('#puesto').val();
        var suspendido = $('#suspendido').val();
        $.ajax({
            url: url,
            headers: { "Authorization": localStorage.getItem('token') },
            type: 'PUT',
            data: { id: id, nombre: nombre, apellido: apellido, puesto: puesto, suspendido: suspendido },
            success: function (result) {
                Empleados.cargarTabla();
            }
        });
        $("#frmEditarEmpleado").hide();
    };
    Empleados.prototype.agregarEmpleado = function () {
        var nombre = $('#nombreAdd').val();
        var apellido = $('#apellidoAdd').val();
        var puesto = $('#puestoAdd').val();
        var suspendido = $('#suspendidoAdd').val();
        var formData = {
            'nombre': nombre,
            'apellido': apellido,
            'puesto': puesto,
            'suspendido': suspendido
        };
        $.ajax({
            url: url,
            type: 'POST',
            headers: { "Authorization": localStorage.getItem('token') },
            data: formData,
            success: function (result) {
                Empleados.cargarTabla();
            }
        });
        $("#frmAgregarEmpleado").hide();
    };
    return Empleados;
}());
