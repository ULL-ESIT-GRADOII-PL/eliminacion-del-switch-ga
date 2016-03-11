(function(exports){
	"use strict";
function Temperatura(valor, tipo) {

	Medida.call(this, valor, tipo);

}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;

function Celsius(valor) {

	Temperatura.call(this, valor, "c");
	this.name = function() {
		return "Celsius";
	};
}

Celsius.prototype = new Temperatura();
Celsius.prototype.constructor = Celsius;

Celsius.prototype.toFahrenheit = function () {
  var result = (this.valor * 9/5)+32;
  return result;
}

Celsius.prototype.toKelvin = function () {
  var result = parseFloat(this.valor) + 273.15;
  return result;
}


function Farenheit(valor) {

	Temperatura.call(this, valor, "f");
	this.name = function() {
		return "Farenheit";

	};
}

Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;

Farenheit.prototype.toCelsius = function () {
  var result = (this.valor - 32) * 5/9;
  return result;
}

Farenheit.prototype.toKelvin = function () {
  var result = ((this.valor - 32) / (9/5)) + 273.15;
  return result;
}

function Kelvin(valor) {

	Temperatura.call(this, valor, "k");
	this.name = function() {
		return "Kelvin";

	}

}

Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Kelvin.prototype.toCelsius = function () {
  var result = this.valor - 273.15;
  return result;
}

Kelvin.prototype.toFahrenheit = function () {
  var result = ((this.valor - 273.15) * 9/5) + 32;
  return result;
}
//hacemos las exportaciones de la clausura
exports.Temperatura = Temperatura;
exports.Celsius = Celsius;
exports.Fahrenheit = Fahrenheit;
exports.Kelvin = Kelvin;
})(this);
