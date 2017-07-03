function ejercicio2 (celulares,numero){
  //var celulares= [784123123, 355676784,3423543554];
  var respuesta = celulares.filter(function(elemento){
    elemento= elemento.toString();
    numero= numero.toString();
    if(elemento.substr(0,3)==numero || elemento.substr(-3)==numero)
      return true;
    else
      return false;
  });
  return respuesta;
}
console.log("Ejercicio 2 : "+ ejercicio2([784572623,12362632,238217231784],784));
