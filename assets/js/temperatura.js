
function Temperatura(valor, tipo) {
	Medida.call(this, valor, tipo);
}

function Celsius(valor) {
	Temperatura.call(this, valor, "c");
}

function Farenheit(valor) {
	Temperatura.call(this, valor, "f");
}

function Kelvin(valor) {
	Temperatura.call(this, valor, "k");
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;
Celsius.prototype = new Temperatura();
Celsius.prototype.constructor = Celsius;
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;
