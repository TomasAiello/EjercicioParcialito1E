/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables

	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let bandera;
	//iniciar variables

	bandera = 0;

	do {
		numero = parseInt(prompt("ingrese numero"));

		if (numero >= maximo || bandera == 0) {
			maximo = numero;	
		}

		if (numero <= minimo || bandera == 0) {
			minimo = numero;
			bandera = 1;
		}
		
		respuesta = prompt("desea continuar? si/no");

	} while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN