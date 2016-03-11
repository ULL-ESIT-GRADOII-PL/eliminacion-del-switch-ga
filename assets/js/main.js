(function(exportar){
	"use stric";
  function main() {
      var valor     = document.getElementById('convert').value,
          elemento  = document.getElementById('converted');
					console.log(valor);
      elemento.innerHTML = Medida.convertir(valor);
      return false;
  }
	exportar.main = main;
})(this);
