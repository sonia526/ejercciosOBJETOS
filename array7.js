//ejercicio7

var edad =[20,65,3,5,78];

function verificarEdad (edad){
  var respuesta = edad.filter(function(elemento){
    return elemento > 18;
  });
  return respuesta;
}
var mayoresDeEdad=verificarEdad(edad);
function ejercicio7 (edad){
  var edadFinal= 2017-edad;
  console.log(edadFinal);

}
var resultado1 = mayoresDeEdad.map(ejercicio7);
