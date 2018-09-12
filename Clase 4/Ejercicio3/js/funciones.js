window.addEventListener('load', asignarManejadores);

function asignarManejadores(){
    document.getElementById('btnCambioTexto').addEventListener("click", cambiarTexto);
    document.getElementById('btnCambioClases').addEventListener("click", cambioClase);
    document.getElementById('btnSacarClase').addEventListener("click", sacoClase);
}

function cambiarTexto(){
    document.getElementById('p1').innerHTML = "Otro texto p1";
    document.getElementsByTagName('p')[1].innerHTML = "Otro texto p2";
    document.getElementsByClassName('claseP')[0].innerHTML = "Otro texto p3";
    var div = document.getElementById('divParrafos');
    div.getElementsByTagName('p')[3].innerHTML = "Otro texto p4";

}

function cambioClase(){
    //document.getElementById('p2').setAttribute('class', 'claseP');
    document.getElementById('p2').className = "claseP";
}

function sacoClase(){
    document.getElementById('p3').setAttribute('class', '')
}