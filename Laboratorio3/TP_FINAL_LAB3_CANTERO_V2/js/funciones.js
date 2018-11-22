"use strict";
$(document).ready(function () {
    window.localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDE1NDkwODUsImV4cCI6MTU0MTU1MjY4NSwiYXVkIjoiODQ2ZmY3MzU5NTMwZTBjNjY2YmRiMTQwYzNmYWVlMmQwZDNkMDMwMSIsImRhdGEiOnsidXN1YXJpbyI6bnVsbCwicHVlc3RvIjpudWxsfSwiYXBwIjoiQVBJIFJFU1QgQ0QgMjAxNyJ9.nViSyw_GJef5BlEowooWUxK3C67eiXbKzh8sR33pX6M");
    $("#frmEditarEmpleado").hide();
    $("#frmAgregarEmpleado").hide();
    Empleados.cargarTabla();
});
