//funcion para generar numeros aleatorios
// Definimos un array con los números del 1 al 10
let numerosGenerados = []; // Variable para almacenar los números generados

function azar() {
  let numeros = [1, 2, 3, 4, 5, 6];

  numerosGenerados = []; // Reiniciar el array de números generados

  for (var i = 1; i <= 3; i++) {
    let indiceAleatorio = Math.floor(Math.random() * numeros.length);
    let numeroAleatorio = numeros[indiceAleatorio];
    numerosGenerados.push(numeroAleatorio); // Agregar el número al array
  }
  
  document.getElementById('res').innerHTML = numerosGenerados.join(' '); // Mostrar los números generados separados por espacio

  verificarSuma(); // Verificar la suma después de generar los números
}

function sumarArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

function verificarSuma() {
  let suma = sumarArray(numerosGenerados);
  
  if (suma >= 18) {
    document.getElementById('gan').innerHTML = "¡Felicidades, ganaste una guitarra! puedes intrecambiarla en nuestras sucursales";
  } else {
    document.getElementById('gan').innerHTML = ""; // Limpiar el mensaje si no se cumple la condición
  }
}


