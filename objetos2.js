function individuo(nombre,dia,mes,anioNacimiento){
  this.nombre=nombre;
  this.dia=dia;
  this.mes=mes;
  this.anioNacimiento=anioNacimiento;

  this.edad=function(){
  return "la edad actual de "+ this.nombre +" es:" + (2017 - this.anioNacimiento);
  };
}
var sonia=new individuo("sonia",10,8,1991);
document.write(sonia.edad());
