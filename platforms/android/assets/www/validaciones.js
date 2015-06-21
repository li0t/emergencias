function valida(){
    rutMedico = document.getElementById("rutmedico").value;
    
    if(rutMedico == ""){
        alert("Tiene que ingresar un Rut");
        return false;
    }
}
function valida2(){
    nombreMedico = document.getElementById("nombremedico").value;
    apellidopatMedico = document.getElementById("apellidopatmedico").value;
    apellidomatMedico = document.getElementById("apellidomatmedico").value;
    
    if(nombreMedico == "" || apellidopatMedico == "" || apellidomatMedico == ""){
        alert ("Tiene que ingresar Nombre y apellidos");
        return false;
    }
}
function valida3(){
    rut = document.getElementById("rut").value;
    nombre = document.getElementById("nombre").value;
    apepat = document.getElementById("apepat").value;
    apemat = document.getElementById("apemat").value;
    telefono = document.getElementById("telefono").value;
    clave = document.getElementById("clave").value;
	prevision = document.getElementById("prevision").value;
    if(rut == "" || nombre == "" || apepat == "" || apemat== "" || telefono == "" || clave == "" || prevision == ""){
        alert ("Tiene que ingresar todos los datos.");
        return false;
    }

}
function prueba(){
	rut = document.getElementById("rut").value;
	if(rut == ""){
		alert ("error")
		return false;
	}
}
function valida4(){
    rut = document.getElementById("rut").value;
    clave = document.getElementById("clave").value;
    if(rut = "" || clave == ""){
        alert ("Ingrese Rut y Clave");
        return false;
    }
}