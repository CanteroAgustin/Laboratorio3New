window.addEventListener('load', asignarManejadores);

function asignarManejadores(){
    document.getElementById('btnCrearP').addEventListener("click", crearParrafo);
    document.getElementById('btnCrearImg').addEventListener("click", crearImagen);
    document.getElementById('btnCrearLast').addEventListener("click", borrarUltimo);
    document.getElementById('btnCrearFirst').addEventListener("click", borrarPrimero);
    document.getElementById('btnSustituir').addEventListener("click", sustituir);
}

function crearParrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(document.getElementById('txtArea').value);
    parrafo.appendChild(texto);
    parrafo.setAttribute('class', 'claseP');
    document.getElementById('div1').appendChild(parrafo);

}

function crearImagen(){
    var imagen = document.createElement('img');
    imagen.setAttribute('src','descarga.jpg');
    imagen.height = '100';
    imagen.alt = 'foto';
    document.getElementById('div1').appendChild(imagen);
}

function borrarUltimo(){
    var div = document.getElementById('div1');
    var hijo = div.lastChild;
    div.removeChild(hijo);
}

function borrarPrimero(){
    var div = document.getElementById('div1');
    var hijo = div.firstChild;
    div.removeChild(hijo);
}

function sustituir(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(document.getElementById('txtArea').value);
    parrafo.appendChild(texto);
    document.getElementById('div1').replaceChild(parrafo, document.getElementById('div1').firstChild);
}