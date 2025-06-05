document.getElementById('registroPokemon').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const horario = document.querySelectorAll('input[name="horario"]:checked');
      const tipos = document.querySelector('input[name="tipos"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      // Validaciones básicas

    if(telefono.length!= 10){ // verifica que el numero este compuesto solo por diez digitos
        alert("El Pokéfon proporcionado no es válido, asegura que tenga 10 digitos.")
        return;
    }

    pattern = /[0-9]/g;

    let verify = telefono.match(pattern);
    console.log(verify)

    if(!verify){ // verifica que haya al menos un numero en el telefono, para evitar errores en la expresion regular cuando sea NULL
        alert("El Pokéfon no contiene digitos. Por favor solo use numeros.")
        return;
    } else if (verify.length != 10){ // verifica que todo los caracteres dentro del telefono solo sean numeros
        alert("El Pokéfon contiene algunos caracteres invalidos. Revise que solo haya numeros.")
        return;
    }




    // verificar que el entrenador elija al dos horarios de entrenamiento
    if(horario.length != 2){
        alert("Debe elegir 2 horarios preferidos de entrenamiento")
        return;
    }
    // verificar que la hora de batalla sea entre las 7 am y 7 pm
    
    const openingHour = 7;
    const closingHour = 19;

    let hours = hora.split(":")
 

    if(hours[0] > 19 || hours[0][1] < 7){
        alert("El gimnasio esta cerrado a esta hora. Por favor seleccione una hora entre las 7:00 AM y 7:00 PM.")
    }
    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
    return;
});