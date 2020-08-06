/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";
	
	do {
		numero = parseInt(prompt("ingrese numero"));
		acumulador = acumulador + numero;
		contador ++;
		respuesta = prompt ("quiere ingresar otro numero? si/no");
	}while (respuesta=="si");
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

	


}//FIN DE LA FUNCIÓN