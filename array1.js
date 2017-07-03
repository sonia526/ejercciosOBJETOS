/*<html>
  <head>
  </head>
<body id="ejercicio 1">


</body>
</html>*/

var num=9;
var array=[4,4,5,12];
array.pusch(num);

document.getElementById("ejercicio 1").innerHTML-
  array.reduce(function(valorAnterior,valorActual,indice,vector){
  return valorAnterior*valorActual;
});
