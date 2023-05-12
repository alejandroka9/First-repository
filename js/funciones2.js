// jquerry que permite que el boton aparezca cuando los campos esten rellenos 
$(document).ready(function() {
    // Asignar evento de cambio a los campos de entrada
    $('#usuario, #contraseña').on('input', function() {
      var campo1 = $('usuario').val();
      var campo2 = $('#contraseña').val();
  
      if (campo1 !== '' && campo2 !== '') {
        $('#submitt').show();
      } else {
        $('#submitt').hide();
      }
    });
  
    // Evitar la acción por defecto del botón
    $('#submitt').on('click', function(e) {
      e.preventDefault();
      // Aquí puedes realizar otras acciones si es necesario
    });
  });

//validacion en editar plantas
document.getElementById("valsku").style.display = "none";
document.getElementById("valnombre").style.display = "none";
document.getElementById("valvalor").style.display = "none";
document.getElementById("valfecha").style.display = "none";
document.getElementById("valdescripcion").style.display = "none";


function validarFormulario(){
    let sku = document.getElementById("txtSku").value;
    let nombre = document.getElementById("txtNombre").value;
    let valor = document.getElementById("txtValor").value;
    let fecha = document.getElementById("txtFecha").value;
    let descripcion = document.getElementById("txtDescripcion").value;

    if (sku.length == 0) {
        document.getElementById("valsku").style.display = "inline";
        document.getElementById("txtSku").classList.add("is-invalid");
    }else{
        document.getElementById("txtSku").classList.remove("is-invalid");
        document.getElementById("txtSku").classList.add("is-valid");
        document.getElementById("valsku").style.display = "none";
    }


    if (nombre.length == 0) {
        document.getElementById("valnombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valnombre").style.display = "none";
    }
    
    if (valor.length == 0) {
        document.getElementById("valvalor").style.display = "inline";
        document.getElementById("txtValor").classList.add("is-invalid");
    }else{
        document.getElementById("txtValor").classList.remove("is-invalid");
        document.getElementById("txtValor").classList.add("is-valid");
        document.getElementById("valvalor").style.display = "none";
    }

    if (fecha.length == 0) {
      document.getElementById("valfecha").style.display = "inline";
      document.getElementById("txtFecha").classList.add("is-invalid");
  }else{
      document.getElementById("txtFecha").classList.remove("is-invalid");
      document.getElementById("txtFecha").classList.add("is-valid");
      document.getElementById("valfecha").style.display = "none";
  }


    if (descripcion.length == 0) {
        document.getElementById("valdescripcion").style.display = "inline";
        document.getElementById("txtDescripcion").classList.add("is-invalid");
    }else{
        document.getElementById("txtDescripcion").classList.remove("is-invalid");
        document.getElementById("txtDescripcion").classList.add("is-valid");
        document.getElementById("valdescripcion").style.display = "none";
    }

}

//editar varios small desde la clase textito
var elementos = document.querySelectorAll('.textito');

elementos.forEach(function(elemento) {
  // Realizar cambios en cada elemento
  elemento.style.color = 'yellow';
  elemento.style.fontSize = '16px';

});


//nuevos cambios


