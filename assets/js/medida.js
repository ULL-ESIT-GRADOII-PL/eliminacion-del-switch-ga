function Medida(valor,tipo) {
		var regexp = XRegExp('^(?<value>[+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?\\s*) # 	valor \n\
													 (?<type>[\w])   #type for number   \n\'','xi');
		if(tipo) {
			this.valor = valor;
			this.tipo = tipo;
		}
		else {
			var match = XRegExp.exec(valor,regexp);
			this.valor = match.value;
			this.tipo = match.tipo;
		}
		var measures = {};	//Aquí tenemos que rellenar el hash con las funciones para realizar las conversiones
		//Funcion para realizar el match
		this.match = function(str) {
		}
}
