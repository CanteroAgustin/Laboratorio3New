window.onload = function () {

    cargarPaises(data);

    $('#paises').on('change', function () {
        cargarCiudades(this.value);
    });
}



Array.prototype.unique = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

function cargarPaises(a) {
    {
        var paises = a
            .map(function (dato) {
                return dato.pais;
            }).unique()
            .sort();

        $.each(paises, function (key, value) {
            $("#paises").append('<option name="' + value + '">' + value + '</option>');
        });
    }


}

function cargarCiudades(a) {
    {
        $("#ciudades").empty();
        var ciudades = data
            .filter(function (otro) {
                return otro.pais === a;
            }).map(function (dato){
                return dato.ciudad;
            }).unique().sort();

        $.each(ciudades, function (key, value) {
            $("#ciudades").append('<option name="' + value + '">' + value + '</option>');
        });
    }


}