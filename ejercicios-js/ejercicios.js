// ===================================================================
// Ejercicios de JavaScript
// Cada ejercicio: 1) se declaran las variables, 2) la función, 3) se prueba.
// ===================================================================

// 1. Contraseña válida
// En JavaScript no existe .equals() (eso es de Java).
// Su equivalente es === : compara si dos valores son exactamente iguales.
let clave1 = "2Fj(jjbFsuj";
let clave2 = "eoZiugBf&g9";
let claveIngresada = "2Fj(jjbFsuj";

function contrasenaValida(clave) {
  let esValida = false;
  if (clave === clave1 || clave === clave2) {
    esValida = true;
  }
  return esValida;
}

console.log("1.", contrasenaValida(claveIngresada)); // true
console.log("1.", contrasenaValida("hola"));         // false

// 2. Calcular impuestos
let edad = 20;
let ingresos = 1500;

function calcularImpuestos(edad, ingresos) {
  let impuesto = 0;
  if (edad >= 18 && ingresos >= 1000) {
    impuesto = ingresos * 0.4;
  }
  return impuesto;
}

console.log("2.", calcularImpuestos(edad, ingresos)); // 600

// 3. IMC
let peso = 72;
let altura = 1.6;

function bmi(peso, altura) {
  let indice = peso / (altura * altura);
  let resultado = "";
  if (indice < 18.5) {
    resultado = "Bajo de peso";
  } else if (indice < 25) {
    resultado = "Normal";
  } else if (indice < 30) {
    resultado = "Sobrepeso";
  } else {
    resultado = "Obeso";
  }
  return resultado;
}

console.log("3.", bmi(peso, altura)); // Sobrepeso

// 4. Imprimir un arreglo
let elementos = [1, "Hola", 2, "Mundo"];

function imprimirArreglo(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log("4.", arreglo[i]);
  }
}

imprimirArreglo(elementos);

// 5. Número de likes
let cantidadLikes = 34567;

function likes(numero) {
  let texto = "";
  if (numero >= 1000000) {
    texto = Math.floor(numero / 1000000) + "M";
  } else if (numero >= 1000) {
    texto = Math.floor(numero / 1000) + "K";
  } else {
    texto = String(numero);
  }
  return texto;
}

console.log("5.", likes(cantidadLikes)); // 34K
console.log("5.", likes(7456345));       // 7M
console.log("5.", likes(983));           // 983

// 6. FizzBuzz
let numeroFizz = 15;

function fizzBuzz(numero) {
  let resultado;
  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = "fizzbuzz";
  } else if (numero % 3 === 0) {
    resultado = "fizz";
  } else if (numero % 5 === 0) {
    resultado = "buzz";
  } else {
    resultado = numero;
  }
  return resultado;
}

console.log("6.", fizzBuzz(numeroFizz)); // fizzbuzz
console.log("6.", fizzBuzz(9), fizzBuzz(10), fizzBuzz(7)); // fizz buzz 7

// 7. Contar rango de números (excluyéndolos)
let inicioConteo = 1;
let finConteo = 9;

function contarRango(inicio, fin) {
  let contador = 0;
  for (let i = inicio + 1; i < fin; i++) {
    contador++;
  }
  return contador;
}

console.log("7.", contarRango(inicioConteo, finConteo)); // 7

// 8. Sumar rango de números (incluyéndolos)
let inicioSuma = 1;
let finSuma = 4;

function sumarRango(inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma = suma + i;
  }
  return suma;
}

console.log("8.", sumarRango(inicioSuma, finSuma)); // 10

// 9. Número de aes
let palabraAes = "matematicas";

function numeroDeAes(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      contador++;
    }
  }
  return contador;
}

console.log("9.", numeroDeAes(palabraAes)); // 3

// 10. Número de caracteres
let textoBuscar = "javascript";
let caracterBuscar = "a";

function numeroDeCaracteres(texto, caracter) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) {
      contador++;
    }
  }
  return contador;
}

console.log("10.", numeroDeCaracteres(textoBuscar, caracterBuscar)); // 2

// 11. Sumar arreglo
let numerosSumar = [3, 1, 2];

function sumarArreglo(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}

console.log("11.", sumarArreglo(numerosSumar)); // 6

// 12. Multiplicar arreglo
let numerosMultiplicar = [4, 1, 2, 3];

function multiplicarArreglo(arreglo) {
  let producto = 1;
  for (let i = 0; i < arreglo.length; i++) {
    producto = producto * arreglo[i];
  }
  return producto;
}

console.log("12.", multiplicarArreglo(numerosMultiplicar)); // 24

// 13. Remover ceros
let numerosConCeros = [0, 1, 0, 2, 0, 3];

function removerCeros(arreglo) {
  let sinCeros = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== 0) {
      sinCeros.push(arreglo[i]);
    }
  }
  return sinCeros;
}

console.log("13.", removerCeros(numerosConCeros)); // [1, 2, 3]

// 14. Sumar arreglo entre el rango
// (en el PDF se llama sumarArreglo; se cambia el nombre para no chocar con el 11)
let numerosRango = [1, 2, 3, 4, 5];
let posicionInicial = 1;
let posicionFinal = 3;

function sumarArregloRango(arreglo, inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}

console.log("14.", sumarArregloRango(numerosRango, posicionInicial, posicionFinal)); // 9

// 15. Transcribir ADN a ARN
let cadenaAdn = "ACGT";

function transcribir(adn) {
  let arn = "";
  for (let i = 0; i < adn.length; i++) {
    let letra = adn[i];
    if (letra === "G") {
      arn = arn + "C";
    } else if (letra === "C") {
      arn = arn + "G";
    } else if (letra === "T") {
      arn = arn + "A";
    } else if (letra === "A") {
      arn = arn + "U";
    }
  }
  return arn;
}

console.log("15.", transcribir(cadenaAdn)); // UGCA

// 16. Capitalizar palabra
let nombre = "pedro";

function capitalizar(texto) {
  let primeraLetra = texto.charAt(0).toUpperCase();
  let resto = texto.slice(1);
  return primeraLetra + resto;
}

console.log("16.", capitalizar(nombre)); // Pedro

// 17. Capitalizar cada palabra
// (en el PDF también se llama capitalizar; se cambia el nombre para no chocar con el 16)
let frase = "hola mundo desde javascript";

function capitalizarPalabras(texto) {
  let palabras = texto.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = capitalizar(palabras[i]);
  }
  return palabras.join(" ");
}

console.log("17.", capitalizarPalabras(frase)); // Hola Mundo Desde Javascript

// 18. Encontrar el número máximo (sin Math.max)
let numerosMax = [3, 9, 6];

function max(arreglo) {
  let mayor = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  return mayor;
}

console.log("18.", max(numerosMax)); // 9

// 19. Encontrar el número mínimo (sin Math.min)
let numerosMin = [3, 9, 6];

function min(arreglo) {
  let menor = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }
  return menor;
}

console.log("19.", min(numerosMin)); // 3

// 20. Generar contraseña
let textoClave = "Hola Mundo";

function password(texto) {
  let minusculas = texto.toLowerCase();
  let nuevaClave = "";
  for (let i = 0; i < minusculas.length; i++) {
    let letra = minusculas[i];
    if (letra === " ") {
      continue; // se salta los espacios
    } else if (letra === "a") {
      nuevaClave = nuevaClave + "4";
    } else if (letra === "e") {
      nuevaClave = nuevaClave + "3";
    } else if (letra === "i") {
      nuevaClave = nuevaClave + "1";
    } else if (letra === "o") {
      nuevaClave = nuevaClave + "0";
    } else {
      nuevaClave = nuevaClave + letra;
    }
  }
  return nuevaClave;
}

console.log("20.", password(textoClave)); // h0l4mund0

// 21. Encontrar números pares
let numerosPares = [1, 2, 3, 4, 5, 6];

function pares(arreglo) {
  let soloPares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      soloPares.push(arreglo[i]);
    }
  }
  return soloPares;
}

console.log("21.", pares(numerosPares)); // [2, 4, 6]

// 22. Encontrar posiciones de números pares
let numerosPosiciones = [1, 2, 3, 4, 5, 6];

function posiciones(arreglo) {
  let listaPosiciones = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      listaPosiciones.push(i);
    }
  }
  return listaPosiciones;
}

console.log("22.", posiciones(numerosPosiciones)); // [1, 3, 5]

// 23. Duplicar elementos
let numerosDuplicar = [1, 2, 3];

function duplicar(arreglo) {
  let duplicados = [];
  for (let i = 0; i < arreglo.length; i++) {
    duplicados.push(arreglo[i] * 2);
  }
  return duplicados;
}

console.log("23.", duplicar(numerosDuplicar)); // [2, 4, 6]

// 24. Palabras que empiezan por "a"
let palabrasA = ["beta", "alfa", "Arbol", "gama"];

function empiezanConA(arreglo) {
  let conA = [];
  for (let i = 0; i < arreglo.length; i++) {
    let primeraLetra = arreglo[i].charAt(0).toLowerCase();
    if (primeraLetra === "a") {
      conA.push(arreglo[i]);
    }
  }
  return conA;
}

console.log("24.", empiezanConA(palabrasA)); // ["alfa", "Arbol"]

// 25. Palabras que terminan en "s"
let palabrasS = ["pruebas", "arroz", "árbol", "tokens"];

function terminanConS(arreglo) {
  let conS = [];
  for (let i = 0; i < arreglo.length; i++) {
    let palabra = arreglo[i];
    let ultimaLetra = palabra.charAt(palabra.length - 1).toLowerCase();
    if (ultimaLetra === "s") {
      conS.push(palabra);
    }
  }
  return conS;
}

console.log("25.", terminanConS(palabrasS)); // ["pruebas", "tokens"]

// 26. Imprimir una matriz
let matrizNumeros = [[1, 2], [3, 4]];

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      console.log("26.", matriz[i][j]);
    }
  }
}

imprimirMatriz(matrizNumeros);

// 27. Traducir números a palabras (0 a 9)
let nombresNumeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let numerosTraducir = [0, 1, 2, 3];

function numerosAPalabras(arreglo) {
  let palabras = [];
  for (let i = 0; i < arreglo.length; i++) {
    palabras.push(nombresNumeros[arreglo[i]]);
  }
  return palabras;
}

console.log("27.", numerosAPalabras(numerosTraducir)); // ["cero", "uno", "dos", "tres"]

// 28. Traducir palabras a números (-1 si no es número)
let palabrasTraducir = ["cero", "uno", "hola", "nueve"];

function palabrasANumeros(arreglo) {
  let numeros = [];
  for (let i = 0; i < arreglo.length; i++) {
    let numero = -1;
    for (let j = 0; j < nombresNumeros.length; j++) {
      if (arreglo[i].toLowerCase() === nombresNumeros[j]) {
        numero = j;
      }
    }
    numeros.push(numero);
  }
  return numeros;
}

console.log("28.", palabrasANumeros(palabrasTraducir)); // [0, 1, -1, 9]

// 29. Número de asteriscos en un arreglo
let arregloAsteriscos = ["", "*", "", "*"];

function numAsteriscos(arreglo) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "*") {
      contador++;
    }
  }
  return contador;
}

console.log("29.", numAsteriscos(arregloAsteriscos)); // 2

// 30. Número de asteriscos en una matriz
// (en el PDF también se llama numAsteriscos; se cambia el nombre para no chocar con el 29)
let matrizAsteriscos = [
  ["*", "", "*"],
  ["", "*", ""],
  ["*", "", "*"],
];

function numAsteriscosMatriz(matriz) {
  let contador = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === "*") {
        contador++;
      }
    }
  }
  return contador;
}

console.log("30.", numAsteriscosMatriz(matrizAsteriscos)); // 5

// 31. Distancia entre dos strings
let texto1 = "hola";
let texto2 = "hala";

function distancia(a, b) {
  let diferentes = 0;
  let largo = a.length;
  if (b.length > largo) {
    largo = b.length;
  }
  for (let i = 0; i < largo; i++) {
    if (a[i] !== b[i]) {
      diferentes++; // si un texto es más corto, la letra que falta cuenta como diferente
    }
  }
  return diferentes;
}

console.log("31.", distancia(texto1, texto2)); // 1
console.log("31.", distancia("hola", "holas")); // 1
