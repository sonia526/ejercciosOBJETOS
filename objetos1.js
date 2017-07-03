
//ejercicio 1 de objetos
function rectangulo(base, altura){
  this.base= base;
  this.altura=altura;
}
  var respuesta= new rectangulo(20, 12);
  var area = respuesta.base * respuesta.altura;
  console.log(area);
