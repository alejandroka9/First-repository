//validacion formulario de agregar producto con jquerry
$(function(){
    $("#formulario").validate({
        rules:{
            txtSkuu:{
                required:true,
                minlength:3,
                maxlength:17
                
            },
            txtNombree:{
                required:true,
                minlength:12
            },
            txtValorr:{
                required:true,
                minlength:6
            },
            txtDescripcionn:{
                required:true,
                minlength:50
            }
        },
        messages:{
            txtSkuu:{
                required: "El Sku es un campo obligatorio.",
                minlength: "El minimo de caracteres es 3.",
                maxlength: "El maximo de caracteres es 17."
            },
            txtNombree:{
                required:"El Nombre es un campo obligatorio.",
                minlength: "El minimo de caracteres es 10."
            },
            txtValorr:{
                required: "El Valor es un campo obligatorio.",
                minlength: "El minimo de caracteres es 6."
            },
            txtDescripcionn:{
                
                required: "La Descripcion es un campo obligatorio.",
                minlength: "El minimo de caracteres es 50."
            }
        }
    })
})

//añadir clase con js a agregar 
var letritas = document.getElementsByTagName("small");

for (var i = 0; i < letritas.length; i++) {
  letritas[i].classList.add("textito");
}