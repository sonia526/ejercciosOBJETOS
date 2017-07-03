var arr=[7,21,44,80,77,35];
var n=7;
var respuesta="";

arr.forEach(function addva(val){
  if(val%n==0){
  respuesta +=val+" ";
}
});
document.write(respuesta);
