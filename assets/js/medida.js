(function(exportar){
	"user strict";
	function Medida(valor,tipo) {
		var regexp = XRegExp('^(?<number> [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?\\s*) # 	valor \n\
													 (?<tipo> [\w])   #type for number','xi');
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
 var expresion = XRegExp('^(?<numero>[+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?[ ]*) # valor \n\
											(?<tipo>[cfk])   #type for number   \n\
											(?<to>[ ]+(?:to[ ]+)?)  #optional to string \n\
											(?<destino>[cfk])[ ]*$    #type to convert', 'xi');
	var match = XRegExp.exec(str,expresion);
	console.log(match);
	return match; 	// Devolvemos el array del matching
}

	Medida.convertir = function(valor) {
		var measures = Medida.measures;
		measures.c = Celsius;
		measures.f = Farenheit;
		measures.k = Kelvin;
		var match = Medida.match(valor);	//Invocamos al método match de Medida
		console.log(match);
		if (match) {
			var numero = parseFloat(match.numero),
			tipo   = match.tipo,
			destino = match.destino;
			try {
				var source = new measures[tipo](numero);  // new Fahrenheit(32)
				console.log(source);
				var target = "to" + measures[destino].name; // "toCelsius"
				var aux = source[target](); // "0 Celsius"
				console.log("Resultado : " + aux);
			}
			catch(err) {
				console.log(err);
			return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
			}
		}
		else
		return "Introduzca una temperatura valida: 330e-1 F to C";
	}
exportar.Medida = Medida;
})(this);
