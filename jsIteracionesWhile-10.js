/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let promediopositivos;
	let promedionegativos;
	let diferencia;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let ipositivos = 0;
	let inegativos = 0;
	let iceros = 0;
	let ipares = 0;

	respuesta = "si";
	do {
		numeroIngresado = parseInt(prompt("ingrese numero"));
		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			ipositivos++;
			promediopositivos = sumaPositivos / ipositivos;
		}
		else if (numeroIngresado < 0) {
			sumaNegativos = sumaNegativos + numeroIngresado;
			inegativos++;
			promedionegativos = sumaNegativos / inegativos;
		}
		else {
			iceros++;
		}

		if (numeroIngresado % 2 == 0) {
			ipares++;
		}

		diferencia = sumaPositivos + sumaNegativos;
		respuesta = prompt("desea continuar? si/no");
	} while (respuesta == "si");

	alert("la suma de los numero negativos da: " + sumaNegativos);
	alert("la suma de los numeros positivos da: " + sumaPositivos);
	alert("la cantidad de numeros positivos ingresada es: " + ipositivos);
	alert("la cantidad de numeros negativos ingresada es: " + inegativos);
	alert("la cantidad de ceros ingresada es: " + iceros);
	alert("la cantidad de numeros pares es: " + ipares);
	alert("el promedio de los numeros positivos da: " + promediopositivos);
	alert("positivos - negativos = " + diferencia);

}//FIN DE LA FUNCIÓN