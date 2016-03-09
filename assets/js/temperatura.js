
function Temperatura(valor, tipo) {
	Medida.call(this, valor, tipo);
}

function Celsius(valor) {
	Temperatura.call(this, valor, "c");
	this.name = function() {
		return "Celsius";
	};
}

function Farenheit(valor) {
	Temperatura.call(this, valor, "f");
	this.name = function() {
		return "Farenheit";
	};
}

function Kelvin(valor) {
	Temperatura.call(this, valor, "k");
	this.name = function() {
		return "Kelvin";
	}
}
