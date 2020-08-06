/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let clave;
	let oportunidades = 0; 

	do {
		clave = prompt("ingrese la clave");
		oportunidades++;
	} while (clave != "utn750" && oportunidades < 3); // cantidad especifica de oportunidades
	alert ("Clave correcta");

	/*clave = prompt ("ingrese la clave");

	while (clave != "utn750" && oportunidades < 3)
	{
		clave = prompt("ingrese la clave.");
		oportunidades++;
	}

	if (clave == "utn750")
	{
		alert ("Clave correcta");
	}
	
	*/

}//FIN DE LA FUNCIÓN
