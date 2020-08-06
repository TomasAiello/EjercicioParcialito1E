/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {

	let multiplicacion;
	let contador;
	let suma;
	let numero;
	let respuesta;
	contador = 0;
	suma = 0;
	respuesta = "si";
	multiplicacion = 1;

	do {
		numero = parseInt(prompt("ingrese numero"));
		if (numero >= 0) {
			suma = suma + numero;
		}
		else {
			multiplicacion = multiplicacion * numero;
		}
		contador++;
		respuesta = prompt("quiere ingresar otro numero? si/no");
	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = multiplicacion;

}//FIN DE LA FUNCIÓN

/*{
	let contador=0;
	let acumulador=0;
	let respuesta ="si";
    let num;
	let sumapositivos;
	let productonegativo;
let multiplicacion=1
	do{

num=parseInt(prompt("ingrese un numero"));
if (num >=0)
{
	sumapositivos= sumapositivos+num; 
}
else {
	productonegativo= productonegativo * multiplicacion;
}
acumulador=acumulador + num;
contador++;
 respuesta=prompt("ingresa otro numero? si/no");

	}while(respuesta=="si");

document.getElementById("txtIdSuma").value=acumulador;


document.getElementById("txtIdProducto").value=productonegativo;
	

}*/