(function(exportar){
	"use strict";
function Temperatura(valor, tipo) {

	Medida.call(this, valor, tipo);

}

Temperatura.prototype = Object.create(Medida.prototype);
Temperatura.prototype.constructor = Temperatura;

function Celsius(valor) {

	Temperatura.call(this, valor, "c");
	this.name = function() {
		return "Celsius";
	};
}
Celsius.prototype = Object.create(Temperatura.prototype);

Celsius.prototype.toFarenheit = function () {
  return new Farenheit((this.valor * (9 / 5)) + 32);
  //return result;
}

Celsius.prototype.toKelvin = function () {
	return  new Kelvin((this.valor) + 273.15);
  //var result = parseFloat(this.valor) + 273.15;
  //return result;
}

Celsius.prototype.constructor = Celsius;


function Farenheit(valor) {

	Temperatura.call(this, valor, "f");
}
Farenheit.prototype = Object.create(Temperatura.prototype);

Farenheit.prototype.toCelsius = function () {
	return new Celius((this.valor - 32) * (5/9));
	//var result = (this.valor - 32) * 5/9;
  //return result;
}

Farenheit.prototype.toKelvin = function () {
	return new Kelvin((this.valor - 32) / (9 / 5) + 273.15);
	//var result = ((this.valor - 32) / (9/5)) + 273.15;
  //return result;
}


Farenheit.prototype.constructor = Farenheit;


function Kelvin(valor) {

	Temperatura.call(this, valor, "k");
	this.name = function() {
		return "Kelvin";

	}

}

Kelvin.prototype = Object.create(Temperatura.prototype);

Kelvin.prototype.toCelsius = function () {
  return new Celsius(this.valor - 273.15);
  //return result;
}

Kelvin.prototype.toFarenheit = function () {
  return new Farenheit(this.valor * (9/5) - 459.67);
  //return result;
}

Kelvin.prototype.constructor = Kelvin;

exportar.Temperatura = Temperatura;
exportar.Celsius = Celsius;
exportar.Farenheit = Farenheit;
exportar.Kelvin = Kelvin;
})(this);
