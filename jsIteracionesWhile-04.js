/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{

	let numero;

	do {
		numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	}while (numero <= 0 || numero >= 9 || isNaN(numero));


	document.getElementById("txtIdNumero").value = "Numero correcto";
	
}//FIN DE LA FUNCIÓN