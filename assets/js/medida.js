(function(exports){
	"use strict";
	function Medida(valor,tipo) {
		var regexp = XRegExp('^(?<number> [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?\\s*) # 	valor \n\
													 (?<tipo> [\w])   #type for number   \n\'','xi');
		if(tipo) {
			this.valor = valor;
			this.tipo = tipo;
		}
		else {
			console.log("Given args: " + valor);
			var match = XRegExp.exec(valor,regexp);
				this.valor = match.number;
				this.tipo = match.tipo;
			}
	}
Medida.measures = {};	//Aquí tenemos que rellenar el hash con las funciones para realizar las conversiones
//Funcion para realizar el match
Medida.match  = function(str) {
	var ext =  XRegExp('^(?<value>[+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?\\s*) # 	valor \n\
											 (?<type>[\w])   #type for number   \n\
											 (?<to> (to)?) #to \n\
											 (?<dest>[\w] #destino','xi');
	return XRegExp.exec(str,ext); 	// Devolvemos el array del matching
}

	Medida.convertir = function(valor) {
		var measures = Medida.measures;
		var match = Medida.match(valor);	//Invocamos al método match de Medida
		if (match) {
			var numero = match.numero,
			tipo   = match.tipo,
			destino = match.destino;
			try {
				var source = new measures[tipo](numero);  // new Fahrenheit(32)
				var target = "to" + measures[destino].name; // "toCelsius"
				return source[target]().toFixed(2) + " " + target; // "0 Celsius"
			}
			catch(err) {
				console.log(err);
				return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
			}
		}
		else
		return "Introduzca una temperatura valida: 330e-1 F to C";
	}
	exports.Medida = Medida;
})(this);
