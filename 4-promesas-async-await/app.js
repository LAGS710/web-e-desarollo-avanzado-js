/// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
      // de lo contrario, recházala con un mensaje adecuado.
      if (mesasSolicitadas <= mesasDisponibles){
        resolve(mesasSolicitadas);
      } else{
        // de lo contrario, recházala con un mensaje adecuado.
        reject("No hay mesas suficientes para su reservación. Su resservación no pudo ser completada, intente con otra fecha u hora.");
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.floor(Math.random()*10) > 5){
        resolve(console.log("Estimado " + nombreCliente + "su reservacion fue un exito. Lo esperamos"))
      } else {
        reject("No se pudo completar su reservación. Por favor intente más tarde.")
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Hola " + nombreCliente + " estamos verificando la disponibilidad de mesas...");
        // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log("Tenemos disponibles el número de mesas que solicita, continuando con su reservación...")
        // Si no hay mesas disponibles o si ocurre un error, captura el error.
    const confirmacion =  await enviarConfirmacionReserva(nombreCliente);
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 2);  // Intenta hacer una reserva para 3 persona