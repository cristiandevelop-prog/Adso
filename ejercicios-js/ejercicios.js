// Ejercicio 1
//Comprobar contraseña

//Declaramos variables
let clave1 = "123456789";
let clave2 = "abcdefgh";
let claveIngresada = "123456789";

//Usamos === para la comparacion entre contraseñas
function contrasenaValida(clave) {
  let esValida = false;
  if (clave === clave1 || clave === clave2) {
    esValida = true;
  }
  return esValida;
}
console.log("1.", contrasenaValida(claveIngresada)); // true
console.log("1.", contrasenaValida("hola"));         // false


//Ejercicio 2 
//Calcular impuestos
//Declaramos Variables
let edad = 20;
let ingresos = 1500;

function calcularImpuestos(edad, ingresos) {
  let impuesto = 0;
  if (edad >= 18 && ingresos >= 1000) {
    impuesto = ingresos * 0.4;
  }
  return impuesto;
}
console.log("2.", calcularImpuestos(edad, ingresos));



//Ejercicio 3
//IMC
//Declaramos variables
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


//Ejercicio 4
//Imprimir un arreglo
//Declaramos variables
let elementos = [1, "Hola", 2, "Mundo"];

//Usamos un ciclo for para recorrer el arreglo e imprimir cada elemento
function imprimirArreglo(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log("4.", arreglo[i]);
  }
}

imprimirArreglo(elementos);


//Ejercicio 5
//Número de likes
//Declaramos variables
let cantidadLikes = 34567;

//Usamos Math.floor para quitar los decimales al dividir entre mil o un millón
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


//Ejercicio 6
//FizzBuzz
//Declaramos variables
let numeroFizz = 15;

//Usamos % (residuo) para saber si el número es múltiplo de 3, de 5 o de ambos
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


//Ejercicio 7
//Contar rango de números (excluyéndolos)
//Declaramos variables
let inicioConteo = 1;
let finConteo = 9;

//Usamos un ciclo for que empieza después del inicio y termina antes del fin
function contarRango(inicio, fin) {
  let contador = 0;
  for (let i = inicio + 1; i < fin; i++) {
    contador++;
  }
  return contador;
}

console.log("7.", contarRango(inicioConteo, finConteo)); // 7


//Ejercicio 8
//Sumar rango de números (incluyéndolos)
//Declaramos variables
let inicioSuma = 1;
let finSuma = 4;

//Usamos un ciclo for con <= para incluir el número final en la suma
function sumarRango(inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma = suma + i;
  }
  return suma;
}

console.log("8.", sumarRango(inicioSuma, finSuma)); // 10


//Ejercicio 9
//Número de aes
//Declaramos variables
let palabraAes = "matematicas";

//Usamos un ciclo for para revisar letra por letra y contar las "a"
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


//Ejercicio 10
//Número de caracteres
//Declaramos variables
let textoBuscar = "javascript";
let caracterBuscar = "a";

//Usamos un ciclo for para comparar cada letra con el caracter que buscamos
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


//Ejercicio 11
//Sumar arreglo
//Declaramos variables
let numerosSumar = [3, 1, 2];

//Usamos una variable suma que empieza en 0 y le vamos agregando cada número
function sumarArreglo(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}

console.log("11.", sumarArreglo(numerosSumar)); // 6


//Ejercicio 12
//Multiplicar arreglo
//Declaramos variables
let numerosMultiplicar = [4, 1, 2, 3];

//Usamos una variable producto que empieza en 1 (si empezara en 0, todo daría 0)
function multiplicarArreglo(arreglo) {
  let producto = 1;
  for (let i = 0; i < arreglo.length; i++) {
    producto = producto * arreglo[i];
  }
  return producto;
}

console.log("12.", multiplicarArreglo(numerosMultiplicar)); // 24


//Ejercicio 13
//Remover ceros
//Declaramos variables
let numerosConCeros = [0, 1, 0, 2, 0, 3];

//Usamos push para agregar al nuevo arreglo solo los números diferentes de 0
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


//Ejercicio 14
//Sumar arreglo entre el rango
//(en el PDF se llama sumarArreglo; se cambia el nombre para no chocar con el 11)
//Declaramos variables
let numerosRango = [1, 2, 3, 4, 5];
let posicionInicial = 1;
let posicionFinal = 3;

//Usamos el ciclo for solo entre la posición inicial y la final
function sumarArregloRango(arreglo, inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}

console.log("14.", sumarArregloRango(numerosRango, posicionInicial, posicionFinal)); // 9


//Ejercicio 15
//Transcribir ADN a ARN
//Declaramos variables
let cadenaAdn = "ACGT";

//Usamos if / else if para cambiar cada letra por su complemento
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


//Ejercicio 16
//Capitalizar palabra
//Declaramos variables
let nombre = "pedro";

//Usamos charAt(0) para tomar la primera letra y toUpperCase para volverla mayúscula
function capitalizar(texto) {
  let primeraLetra = texto.charAt(0).toUpperCase();
  let resto = texto.slice(1);
  return primeraLetra + resto;
}

console.log("16.", capitalizar(nombre)); // Pedro


//Ejercicio 17
//Capitalizar cada palabra
//(en el PDF también se llama capitalizar; se cambia el nombre para no chocar con el 16)
//Declaramos variables
let frase = "hola mundo desde javascript";

//Usamos split para separar las palabras, las capitalizamos y join para unirlas
function capitalizarPalabras(texto) {
  let palabras = texto.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = capitalizar(palabras[i]);
  }
  return palabras.join(" ");
}

console.log("17.", capitalizarPalabras(frase)); // Hola Mundo Desde Javascript


//Ejercicio 18
//Encontrar el número máximo (sin Math.max)
//Declaramos variables
let numerosMax = [3, 9, 6];

//Usamos > para guardar el número más grande que vamos encontrando
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


//Ejercicio 19
//Encontrar el número mínimo (sin Math.min)
//Declaramos variables
let numerosMin = [3, 9, 6];

//Usamos < para guardar el número más pequeño que vamos encontrando
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


//Ejercicio 20
//Generar contraseña
//Declaramos variables
let textoClave = "Hola Mundo";

//Usamos toLowerCase para pasar a minúsculas y luego cambiamos letra por letra
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


//Ejercicio 21
//Encontrar números pares
//Declaramos variables
let numerosPares = [1, 2, 3, 4, 5, 6];

//Usamos % 2 === 0 para saber si un número es par
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


//Ejercicio 22
//Encontrar posiciones de números pares
//Declaramos variables
let numerosPosiciones = [1, 2, 3, 4, 5, 6];

//Usamos push(i) para guardar la posición y no el número
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


//Ejercicio 23
//Duplicar elementos
//Declaramos variables
let numerosDuplicar = [1, 2, 3];

//Usamos push para guardar cada número multiplicado por 2 en un nuevo arreglo
function duplicar(arreglo) {
  let duplicados = [];
  for (let i = 0; i < arreglo.length; i++) {
    duplicados.push(arreglo[i] * 2);
  }
  return duplicados;
}

console.log("23.", duplicar(numerosDuplicar)); // [2, 4, 6]


//Ejercicio 24
//Palabras que empiezan por "a"
//Declaramos variables
let palabrasA = ["beta", "alfa", "Arbol", "gama"];

//Usamos charAt(0) y toLowerCase para que cuente la "a" mayúscula y minúscula
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


//Ejercicio 25
//Palabras que terminan en "s"
//Declaramos variables
let palabrasS = ["pruebas", "arroz", "árbol", "tokens"];

//Usamos charAt(palabra.length - 1) para tomar la última letra de cada palabra
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


//Ejercicio 26
//Imprimir una matriz
//Declaramos variables
let matrizNumeros = [[1, 2], [3, 4]];

//Usamos dos ciclos for: el primero recorre las filas y el segundo los elementos de cada fila
function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      console.log("26.", matriz[i][j]);
    }
  }
}

imprimirMatriz(matrizNumeros);


//Ejercicio 27
//Traducir números a palabras (0 a 9)
//Declaramos variables
let nombresNumeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
let numerosTraducir = [0, 1, 2, 3];

//Usamos el número como posición para buscar su palabra en nombresNumeros
function numerosAPalabras(arreglo) {
  let palabras = [];
  for (let i = 0; i < arreglo.length; i++) {
    palabras.push(nombresNumeros[arreglo[i]]);
  }
  return palabras;
}

console.log("27.", numerosAPalabras(numerosTraducir)); // ["cero", "uno", "dos", "tres"]


//Ejercicio 28
//Traducir palabras a números (-1 si no es número)
//Declaramos variables
let palabrasTraducir = ["cero", "uno", "hola", "nueve"];

//Usamos dos ciclos for: buscamos cada palabra en nombresNumeros; si no está, queda en -1
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


//Ejercicio 29
//Número de asteriscos en un arreglo
//Declaramos variables
let arregloAsteriscos = ["", "*", "", "*"];

//Usamos === "*" para contar solo los asteriscos
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


//Ejercicio 30
//Número de asteriscos en una matriz
//(en el PDF también se llama numAsteriscos; se cambia el nombre para no chocar con el 29)
//Declaramos variables
let matrizAsteriscos = [
  ["*", "", "*"],
  ["", "*", ""],
  ["*", "", "*"],
];

//Usamos dos ciclos for para revisar cada fila y cada elemento de la matriz
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


//Ejercicio 31
//Distancia entre dos strings
//Declaramos variables
let texto1 = "hola";
let texto2 = "hala";

//Usamos !== para contar las letras diferentes en la misma posición
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
