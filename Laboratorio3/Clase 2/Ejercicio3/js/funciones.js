window.onload = function () {
document.getElementById('titulo').addEventListener("click", saludar, false);
document.getElementById('titulo').addEventListener("click", cambiarColor, false);
document.getElementById('titulo').addEventListener("click", cambiarTexto, false);
document.getElementById('titulo').addEventListener("click", function(){
    document.getElementById('titulo').style.backgroundColor = "red";
});
}

function saludar(){
    alert("hola");
    document.getElementById('titulo').removeEventListener("click",saludar);
}

function cambiarColor(){
    document.getElementById('titulo').style.color = "lightgreen";
}

function cambiarTexto(){
    document.getElementById('titulo').innerHTML = "Hola Mundo";
}