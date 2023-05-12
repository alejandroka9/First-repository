
//validacion formulario de carrito con js
document.getElementById("valSku").style.display = "none";
document.getElementById("valNombre").style.display = "none";
document.getElementById("valValor").style.display = "none";
document.getElementById("valDescripcion").style.display = "none";


function validarFormularioo(){
    let sku = document.getElementById("txtSkuu").value;
    let nombre = document.getElementById("txtNombree").value;
    let valor = document.getElementById("txtValorr").value;
    let descripcion = document.getElementById("txtDescripcionn").value;

    if (sku.length == 0) {
        document.getElementById("valSku").style.display = "inline";
        document.getElementById("txtSkuu").classList.add("is-invalid");
    }else{
        document.getElementById("txtSkuu").classList.remove("is-invalid");
        document.getElementById("txtSkuu").classList.add("is-valid");
        document.getElementById("valSku").style.display = "none";
    }


    if (nombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombree").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombree").classList.remove("is-invalid");
        document.getElementById("txtNombree").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";
    }
    
    if (valor.length == 0) {
        document.getElementById("valValor").style.display = "inline";
        document.getElementById("txtValorr").classList.add("is-invalid");
    }else{
        document.getElementById("txtValorr").classList.remove("is-invalid");
        document.getElementById("txtValorr").classList.add("is-valid");
        document.getElementById("valValor").style.display = "none";
    }
    if (descripcion.length == 0) {
        document.getElementById("valDescripcion").style.display = "inline";
        document.getElementById("txtDescripcionn").classList.add("is-invalid");
    }else{
        document.getElementById("txtDescripcionn").classList.remove("is-invalid");
        document.getElementById("txtDescripcionn").classList.add("is-valid");
        document.getElementById("valDescripcion").style.display = "none";
    }


}