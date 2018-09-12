var mascota = {};
mascota.nombre = "wolf";
mascota.raza = "perro";

console.log(mascota);

var persona = {
    nombre : "Agustin",
    apellido : "Cantero", 
    edad : 33
}

console.log(persona);

var alumno = new Object();
alumno.nombre = "robin";
alumno.edad = 25;

console.log(alumno);

function Heroe(nombre, apellido, alias, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.saludar = function(){
        alert("Hola soy "+ this.alias);
    }
}

var superman = new Heroe("Clark", "Kent", "Superman", 34);
var flash = new Heroe("Barry", "Allen", "Flash", 21);

console.log(superman);
console.log(flash);

/*alert(superman.nombre+" "+superman['apellido']);

var propiedad = "edad";
alert(superman[propiedad]);
*/
/*for(var propiedad in superman){
    alert(propiedad);
}*/
/*
superman.poder = "vuela";

for(var propiedad in superman){
    alert(superman[propiedad]);
}

delete superman.edad;

for(var propiedad in superman){
    alert(superman[propiedad]);
}
*/

//superman.saludar();

Heroe.prototype.poder = "";
for(var propiedad in superman){
    alert(superman[propiedad]);
}
for(var propiedad in superman){
    alert(flash[propiedad]);
}


