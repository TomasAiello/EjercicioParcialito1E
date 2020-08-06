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

function mostrar()
{
	let nom;
	let precio;
	let categoria;
	let resp;
	let contador; 
	resp = "s";
	

	do{ // en el caso de que ponga "s" va pisar la variable :( 
		nom = prompt("Ingrese el nombre del articulo");
		categoria = prompt("Ingrese categoria: almacen/lacteo/limpieza/bebida");
		precio = prompt("Ingrese precio del articulo");
		
		resp = prompt("Quiere ingresar otro producto? s/n");
	}while (resp == "s");








}