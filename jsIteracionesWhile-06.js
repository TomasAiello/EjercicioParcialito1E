function mostrar()
{
	let i;
	let acumulador;
	let numero;
	
	i=0;
	acumulador = 0;
		
	while(i < 5){
		numero = parseInt(prompt("ingrese numero"));
		acumulador = acumulador + numero;
		i++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/i;

}//FIN DE LA FUNCIÓN