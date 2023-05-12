$(document).ready(function() {
    $('#formu').submit(function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      
      // Obtener los valores ingresados por el usuario
      var nombres = $('#nombres').val().trim();
      var apellido = $('#apellidos').val().trim();
      var email = $('#correo').val().trim();
      var password = $('#contra').val().trim();
      var numeros = $('#numeros').val().trim();
      
      // Validar los campos
      if (nombres === '') {
        alert('Por favor, ingresa tu nombres');
        return;
      }
  
      if (apellido === '') {
        alert('Por favor, ingresa tu apellidos');
        return;
      }
      
      
      if (email === '') {
        alert('Por favor, ingresa tu correo electrónico');
        return;
      } else if (!isValidEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
        return;
      }
      
      if (password === '') {
        alert('Por favor, ingresa tu contraseña');
        return;
      }
      if (numeros === '') {
        alert('Por favor, ingresa tu numero telefonico');
        return;
      }
      
      
      alert('Registro exitoso');
      
      $('#nombres').val('');
      $('#apellidos').val('');
      $('#email').val('');
      $('#password').val('');
      $('#numeros').val('');
  
  
    });
  });
  
  // Función para validar el formato del correo electrónico
  function isValidEmail(email) {
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }