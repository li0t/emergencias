
//Funcion que valia que los campos esten completos
function Bonton_Enviar(){

 if(document.getElementById('name').value == '') {
        jAlert('Debe ingresar informacion en Nombre','Error');
        document.getElementById('name').focus();
        document.getElementById('name').style.border = "1px solid red";
    }else if
    	(document.getElementById('email').value == '') {
        jAlert('Debe ingresar informacion en email','Error');
        document.getElementById('email').focus();
        document.getElementById('email').style.border = "1px solid red";

	}else if
    	(document.getElementById('comment').value == '') {
        jAlert('Debe ingresar informacion en comentario','Error');
        document.getElementById('comment').focus();
        document.getElementById('comment').style.border = "1px solid red";

	}else{

		Guardar_Registros()


	}

}

//funcion que muestra los registros
function Mostrar_Registros(){

	
	var code = "";
	

	
	$.ajax({
	
	url:"http://comandosonoro.cl/simon/php/consulta_registros.php",
	dataType: 'jsonp',
	jsonp: 'jsoncallback',
	timeout: 5000,
	success: function(data, status){
		$.each(data, function(i,item){ 
			   
			
			code += "<li data-role='list-divider' role='heading' class='ui-li ui-li-divider ui-bar-b ui-li-has-count ui-corner-top'>"+item.nombre+"<span class='ui-li-count ui-btn-up-c ui-btn-corner-all'>2</span></li>";
		    code += "<li data-corners='false' data-shadow='false'";
		    code += "data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c'"; 
		    code += "class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-btn-up-c'><div class='ui-btn-inner ui-li'>";
		    code += "<div class='ui-btn-text'>";
		    code += "<a href='index.html' class='ui-link-inherit'>";
		    code += "<p class='ui-li-aside ui-li-desc'>";
		    code += "<strong>6:24</strong>PM</p>";
		    code += "<h2 class='ui-li-heading'>"+item.email+"</h2>";
		    code += "<p class='ui-li-desc'><strong>"+item.comentario+"</strong></p>";
		    code += "<p class='ui-li-desc'>"+item.ip_visitante+"</p>";
		    code += "<p class='ui-li-desc'>"+item.id+"</p>";
		    code += "<textarea  id='email_eliminar' >"+item.email+"</textarea>";
		    code += "<textarea  id='id_eliminar' >"+item.id+"</textarea>";
		    code += "<textarea  id='ip_eliminar' >"+item.ip_visitante+"</textarea>";

			code += "</a>";
			code += "</li>";
		    code += "<br>";
		    code += "<a onclick='Eliminar_Registros()' data-mini='true' data-role='button' data-icon='delete' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-theme='c' class='ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-left ui-btn-up-c'><span class='ui-btn-inner ui-btn-corner-all'><span class='ui-btn-text'>Delete</span><span class='ui-icon ui-icon-delete ui-icon-shadow'>&nbsp;</span></span></a>";
	        output = document.getElementById("lista").innerHTML = code;
	        console.log(item);
						
		}

		);
		
	},
		error: function(){
		   alert('No se puede cargar Datos');
		}


	});
		
}





//funcion que agrega un registro en la base de datos
function Guardar_Registros()
{
	var nombre = $("#name").val();
    var email = $("#email").val();
    var comentario = $("#comment").val();
       $.ajax({type: "POST", 
              url: "http://www.comandosonoro.cl/simon/php/agregar_registros.php",
              data: ({nombre_registro : nombre, 
              		  email_registro : email,
              		  comentario_registro : comentario}),
            cache: false
            
          });
       console.log(nombre,email,comentario);

}
//funcion que elimina un registro en la base de datos
function Eliminar_Registros()
{
	
    var id = $("#id_eliminar").val();
    
      $.ajax({type: "POST",
      		  url: "http://www.comandosonoro.cl/simon/php/eliminar_registros.php",
      		  type: 'jsonp',
              data: ({id_registro :  id}),
            cache: false,
             success: function() {            
                $('#delete-ok').empty();
                $('#delete-ok').append('<div>Se ha eliminado correctamente el servicio con id='+id+'.</div>').fadeIn("slow");
                $('#'+parent).remove();
            }
          });
       console.log(id);

}


function ingresar(){
	
	var usuario=$("#rut").val();
	var clave=$("#clave").val();
	var error="";
	var i=1;
	if(usuario==""){
		error+=i+") Ingrese rut de usuario.\n";
		i++;
	}
	if(clave==""){
		error+=i+") Ingrese password.\n";
		i++;
	}
	if(error==""){
		if(usuario=="1-5" && clave=="123"){
			window.location.href="pagina2.html";
		}else{
			error+=i+") rut y/o password no son válidos.\n";
			i++;
			jAlert(error,"Error");
		}
	}else{
		jAlert(error,"Error");
	}
	
}


//funcion que ejecuta las funciones principales
function main(){
	
	
	Mostrar_Registros()
}

		    


