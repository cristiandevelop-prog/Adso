// 1. Contraseña válida
function contrasenaValida(str) {
  return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
}

// 2. Calcular impuestos
function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  }
  return 0;
}

// 3. IMC
function bmi(peso, altura) {
  const indice = peso / (altura * altura);
  if (indice < 18.5) return "Bajo de peso";
  if (indice < 25) return "Normal";
  if (indice < 30) return "Sobrepeso";
  return "Obeso";
}

// 4. Imprimir un arreglo
function imprimirArreglo(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 5. Número de likes
function likes(num) {
  if (num >= 1000000) return Math.floor(num / 1000000) + "M";
  if (num >= 1000) return Math.floor(num / 1000) + "K";
  return String(num);
}

// 6. FizzBuzz
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// 7. Contar rango de números (excluyéndolos)
function contarRango(inicio, fin) {
  let contador = 0;
  for (let i = inicio + 1; i < fin; i++) {
    contador++;
  }
  return contador;
}

// 8. Sumar rango de números (incluyéndolos)
function sumarRango(inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  return suma;
}

// 9. Número de aes
function numeroDeAes(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") contador++;
  }
  return contador;
}

// 10. Número de caracteres
function numeroDeCaracteres(str, caracter) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === caracter) contador++;
  }
  return contador;
}

// 11. Sumar arreglo
function sumarArreglo(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

// 12. Multiplicar arreglo
function multiplicarArreglo(arr) {
  let producto = 1;
  for (let i = 0; i < arr.length; i++) {
    producto *= arr[i];
  }
  return producto;
}

// 13. Remover ceros
function removerCeros(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) resultado.push(arr[i]);
  }
  return resultado;
}

// 14. Sumar arreglo entre el rango
// (en el PDF se llama sumarArreglo; aquí lleva otro nombre para no chocar con el 11)
function sumarArregloRango(arr, inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma += arr[i];
  }
  return suma;
}

// 15. Transcribir ADN a ARN
function transcribir(adn) {
  const complementos = { G: "C", C: "G", T: "A", A: "U" };
  let arn = "";
  for (let i = 0; i < adn.length; i++) {
    arn += complementos[adn[i]];
  }
  return arn;
}

// 16. Capitalizar palabra
function capitalizar(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// 17. Capitalizar cada palabra
// (en el PDF también se llama capitalizar; aquí lleva otro nombre para no chocar con el 16)
function capitalizarPalabras(str) {
  const palabras = str.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = capitalizar(palabras[i]);
  }
  return palabras.join(" ");
}

// 18. Encontrar el número máximo (sin Math.max)
function max(arr) {
  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) mayor = arr[i];
  }
  return mayor;
}

// 19. Encontrar el número mínimo (sin Math.min)
function min(arr) {
  let menor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) menor = arr[i];
  }
  return menor;
}

// 20. Generar contraseña
function password(str) {
  const reemplazos = { a: "4", e: "3", i: "1", o: "0" };
  const texto = str.toLowerCase();
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (c === " ") continue;
    resultado += reemplazos[c] || c;
  }
  return resultado;
}

// 21. Encontrar números pares en un arreglo
function pares(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) resultado.push(arr[i]);
  }
  return resultado;
}

// 22. Encontrar posiciones de números pares
function posiciones(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) resultado.push(i);
  }
  return resultado;
}

// 23. Duplicar elementos de un arreglo
function duplicar(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] * 2);
  }
  return resultado;
}

// 24. Palabras que empiezan por "a"
function empiezanConA(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] && arr[i][0].toLowerCase() === "a") resultado.push(arr[i]);
  }
  return resultado;
}

// 25. Palabras que terminan en "s"
function terminanConS(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    const ultima = arr[i][arr[i].length - 1];
    if (ultima && ultima.toLowerCase() === "s") resultado.push(arr[i]);
  }
  return resultado;
}

// 26. Imprimir una matriz
function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      console.log(matriz[i][j]);
    }
  }
}

// 27. Traducir números a palabras (0 a 9)
const PALABRAS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

function numerosAPalabras(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(PALABRAS[arr[i]]);
  }
  return resultado;
}

// 28. Traducir palabras a números (-1 si no es un número)
function palabrasANumeros(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(PALABRAS.indexOf(arr[i].toLowerCase()));
  }
  return resultado;
}

// 29. Número de asteriscos en un arreglo
function numAsteriscos(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") contador++;
  }
  return contador;
}

// 30. Número de asteriscos en una matriz
// (en el PDF también se llama numAsteriscos; aquí lleva otro nombre para no chocar con el 29)
function numAsteriscosMatriz(matriz) {
  let contador = 0;
  for (let i = 0; i < matriz.length; i++) {
    contador += numAsteriscos(matriz[i]);
  }
  return contador;
}

// 31. Distancia entre dos strings (incluye el reto: longitudes distintas)
function distancia(a, b) {
  const corta = Math.min(a.length, b.length);
  let diferentes = 0;
  for (let i = 0; i < corta; i++) {
    if (a[i] !== b[i]) diferentes++;
  }
  return diferentes + Math.abs(a.length - b.length);
}

// ----- Pruebas -----
console.log(contrasenaValida("2Fj(jjbFsuj"), contrasenaValida("hola")); // true false
console.log(calcularImpuestos(18, 1000), calcularImpuestos(17, 5000));  // 400 0
console.log(bmi(65, 1.8), bmi(72, 1.6), bmi(52, 1.75), bmi(135, 1.7)); // Normal Sobrepeso Bajo de peso Obeso
imprimirArreglo([1, "Hola", 2, "Mundo"]);
console.log(likes(983), likes(1900), likes(54000), likes(120800), likes(25222444)); // 983 1K 54K 120K 25M
console.log(fizzBuzz(6), fizzBuzz(25), fizzBuzz(45), fizzBuzz(8));     // fizz buzz fizzbuzz 8
console.log(contarRango(1, 9), contarRango(1, 3), contarRango(10, 15)); // 7 1 4
console.log(sumarRango(1, 4), sumarRango(10, 15));                     // 10 75
console.log(numeroDeAes("matematicas"), numeroDeCaracteres("javascript", "a")); // 3 2
console.log(sumarArreglo([3, 1, 2]), multiplicarArreglo([4, 1, 2, 3])); // 6 24
console.log(removerCeros([0, 1, 0, 2, 0, 3]));                         // [1, 2, 3]
console.log(sumarArregloRango([1, 2, 3, 4, 5], 1, 3));                 // 9
console.log(transcribir("ACGT"), transcribir("ACGTGGTCTTAA"));         // UGCA UGCACCAGAAUU
console.log(capitalizar("pedro"), capitalizarPalabras("hola mundo"));  // Pedro Hola Mundo
console.log(max([3, 9, 6]), min([3, 9, 6]));                           // 9 3
console.log(password("hola"), password("Hola Mundo"));                 // h0l4 h0l4mund0
console.log(pares([1, 2, 3, 4, 5, 6]), posiciones([1, 2, 3, 4, 5, 6])); // [2,4,6] [1,3,5]
console.log(duplicar([1, 2, 3]));                                      // [2, 4, 6]
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));          // ["alfa", "Arbol"]
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));    // ["pruebas", "tokens"]
imprimirMatriz([[1, 2], [3, 4]]);
console.log(numerosAPalabras([0, 1, 2, 3]));                           // ["cero","uno","dos","tres"]
console.log(palabrasANumeros(["cero", "uno", "hola", "nueve"]));       // [0, 1, -1, 9]
console.log(numAsteriscos(["", "*", "", "*"]));                        // 2
console.log(numAsteriscosMatriz([["*", "", "*"], ["", "*", ""], ["*", "", "*"]])); // 5
console.log(distancia("hola", "hola"), distancia("hola", "hala"), distancia("hola", "holas")); // 0 1 1
