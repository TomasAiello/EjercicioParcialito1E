/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/
function mostrar() {
	let nom;
	let precio;
	let categoria;
	let resp;
	let contadorbebidas;
	let contadorlacteos;
	let bandera = 0;
	let mayorprecio;
	let mayorlacteo;
	
	resp = "s";
	mayorlacteo = 0;
	mayorprecio = 0;
	contadorbebidas = 0;
	contadorlacteos = 0;


	do {
		nom = prompt("Ingrese el nombre del articulo");
		categoria = prompt("Ingrese categoria: almacen/lacteos/limpieza/bebidas");
		precio = parseInt(prompt("Ingrese precio del articulo"));

		while (precio < 0 || precio > 1000){
			alert("el precio no puede ser menor a 0 ni mayor a 1000.");
			precio = parseInt(prompt("Ingrese precio del articulo"));
		}

		if (bandera == 0 || precio > mayorprecio) {
			mayorprecio = nom;
		}

		if (categoria == "lacteos" && precio > mayorlacteo) {
			mayorlacteo = nom;
			contadorlacteos++;
		}
		bandera = 1;

		if (categoria == "bebidas") {
			contadorbebidas++;
		}

		resp = prompt("Quiere ingresar otro producto? s/n");
	} while (resp == "s");


	alert("el articulo de mayor precio es: " + mayorprecio);

	if (contadorlacteos != 0){
	alert("el lacteo de mayor precio es: " + mayorlacteo);
	}
	
	alert("la cantidad de articulos de la categoria bebidas es: " + contadorbebidas);

}