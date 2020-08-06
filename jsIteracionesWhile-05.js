/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	
	let sexo;

	do {
		sexo = prompt("ingrese f ó m .");
	} while (sexo != "f" && sexo != "m");

	switch (sexo)		
	{
		case "f":
		document.getElementById("txtIdSexo").value = "Femenino";
		break;
		case "m":
		document.getElementById("txtIdSexo").value = "Masculino";
		break;
	}
	
}//FIN DE LA FUNCIÓN