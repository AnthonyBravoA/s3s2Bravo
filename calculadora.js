const form = document.getElementById('formApuesta');
const resultadoDiv = document.getElementById('resultado');
const errorDiv = document.getElementById('error');

// Escuchamos el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío tradicional del formulario

  // Limpiamos los mensajes anteriores
  resultadoDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    // Obtenemos y convertimos los valores a números
    const monto = parseFloat(document.getElementById('monto').value);
    const cuota = parseFloat(document.getElementById('cuota').value);

    // Validamos que los datos ingresados sean números válidos
    if (isNaN(monto) || isNaN(cuota) || monto <= 0 || cuota <= 0) {
      throw new Error('Por favor ingresa valores numéricos válidos mayores a cero.');
    }

    // Calculamos la ganancia sin bono
    let ganancia = monto * cuota;

    // Si la cuota es mayor a 3.0, se aplica un bono del 5%
    if (cuota > 3.0) {
      ganancia += ganancia * 0.05; // Aplicamos el bono
    }

    // Mostramos el resultado con dos decimales
    resultadoDiv.textContent = `Ganancia potencial: $${ganancia.toFixed(2)}`;
  } catch (error) {
    // Manejamos errores de entrada o cálculo
    errorDiv.textContent = error.message;
  }
});

// Función para limpiar el formulario y resultados
function limpiarFormulario() {
  document.getElementById('monto').value = '';
  document.getElementById('cuota').value = '';
  resultadoDiv.textContent = '';
  errorDiv.textContent = '';
}
