// Versión alternativa: usa métodos que ya trae JavaScript
// (includes, map, filter, reduce, split, join, for...of) en vez de ciclos for clásicos.

// 1. Contraseña válida -> includes revisa si el valor está en la lista
const contrasenaValida = (str) => ["2Fj(jjbFsuj", "eoZiugBf&g9"].includes(str);

// 2. Calcular impuestos -> operador ternario: condicion ? siEsVerdad : siEsFalso
const calcularImpuestos = (edad, ingresos) =>
  edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;

// 3. IMC -> altura ** 2 es "altura al cuadrado"
function bmi(peso, altura) {
  const indice = peso / altura ** 2;
  if (indice < 18.5) return "Bajo de peso";
  if (indice < 25) return "Normal";
  if (indice < 30) return "Sobrepeso";
  return "Obeso";
}

// 4. Imprimir un arreglo -> for...of recorre los elementos sin usar índices
function imprimirArreglo(arr) {
  for (const elemento of arr) {
    console.log(elemento);
  }
}

// 5. Número de likes -> Math.trunc quita los decimales
function likes(num) {
  if (num >= 1000000) return `${Math.trunc(num / 1000000)}M`;
  if (num >= 1000) return `${Math.trunc(num / 1000)}K`;
  return `${num}`;
}

// 6. FizzBuzz -> se arma el texto pegando "fizz" y "buzz"
function fizzBuzz(num) {
  let texto = "";
  if (num % 3 === 0) texto += "fizz";
  if (num % 5 === 0) texto += "buzz";
  return texto || num; // si texto quedó vacío, devuelve el número
}

// 7. Contar rango -> ciclo while (el ejercicio pide usar un ciclo)
function contarRango(inicio, fin) {
  let contador = 0;
  let actual = inicio + 1;
  while (actual < fin) {
    contador++;
    actual++;
  }
  return contador;
}

// 8. Sumar rango -> fórmula de Gauss, sin ciclo
const sumarRango = (inicio, fin) => ((inicio + fin) * (fin - inicio + 1)) / 2;

// 9. Número de aes -> split corta el texto en cada "a"; los pedazos son uno más que las aes
const numeroDeAes = (str) => str.split("a").length - 1;

// 10. Número de caracteres -> igual que el 9, pero con cualquier caracter
const numeroDeCaracteres = (str, caracter) => str.split(caracter).length - 1;

// 11. Sumar arreglo -> reduce va acumulando un resultado
const sumarArreglo = (arr) => arr.reduce((suma, n) => suma + n, 0);

// 12. Multiplicar arreglo -> reduce empezando en 1
const multiplicarArreglo = (arr) => arr.reduce((producto, n) => producto * n, 1);

// 13. Remover ceros -> filter se queda solo con los que cumplen la condición
const removerCeros = (arr) => arr.filter((n) => n !== 0);

// 14. Sumar arreglo entre el rango -> slice recorta el arreglo y luego se suma
const sumarArregloRango = (arr, inicio, fin) => sumarArreglo(arr.slice(inicio, fin + 1));

// 15. Transcribir ADN a ARN -> split("") separa letra por letra, map cambia cada una, join las une
const transcribir = (adn) =>
  adn.split("").map((letra) => ({ G: "C", C: "G", T: "A", A: "U" })[letra]).join("");

// 16. Capitalizar palabra -> charAt(0) es la primera letra
const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// 17. Capitalizar cada palabra -> separar por espacios, capitalizar cada una y unir
const capitalizarPalabras = (str) => str.split(" ").map(capitalizar).join(" ");

// 18. Número máximo -> for...of comparando
function max(arr) {
  let mayor = arr[0];
  for (const n of arr) {
    if (n > mayor) mayor = n;
  }
  return mayor;
}

// 19. Número mínimo -> reduce guardando el menor
const min = (arr) => arr.reduce((menor, n) => (n < menor ? n : menor));

// 20. Generar contraseña -> replaceAll encadenados
const password = (str) =>
  str
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("a", "4")
    .replaceAll("e", "3")
    .replaceAll("i", "1")
    .replaceAll("o", "0");

// 21. Números pares -> filter
const pares = (arr) => arr.filter((n) => n % 2 === 0);

// 22. Posiciones de pares -> forEach da el elemento y su posición
function posiciones(arr) {
  const resultado = [];
  arr.forEach((n, posicion) => {
    if (n % 2 === 0) resultado.push(posicion);
  });
  return resultado;
}

// 23. Duplicar -> map transforma cada elemento
const duplicar = (arr) => arr.map((n) => n * 2);

// 24. Empiezan con "a" -> startsWith
const empiezanConA = (arr) => arr.filter((p) => p.toLowerCase().startsWith("a"));

// 25. Terminan con "s" -> endsWith
const terminanConS = (arr) => arr.filter((p) => p.toLowerCase().endsWith("s"));

// 26. Imprimir matriz -> for...of dentro de for...of
function imprimirMatriz(matriz) {
  for (const fila of matriz) {
    for (const elemento of fila) {
      console.log(elemento);
    }
  }
}

// 27. Números a palabras -> map buscando en la lista
const PALABRAS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
const numerosAPalabras = (arr) => arr.map((n) => PALABRAS[n]);

// 28. Palabras a números -> indexOf devuelve -1 si no la encuentra
const palabrasANumeros = (arr) => arr.map((p) => PALABRAS.indexOf(p.toLowerCase()));

// 29. Asteriscos en arreglo -> filter y contar cuántos quedaron
const numAsteriscos = (arr) => arr.filter((x) => x === "*").length;

// 30. Asteriscos en matriz -> flat convierte la matriz en un solo arreglo
const numAsteriscosMatriz = (matriz) => numAsteriscos(matriz.flat());

// 31. Distancia entre strings -> recorrer el más largo; si falta letra, cuenta como diferente
function distancia(a, b) {
  const largo = Math.max(a.length, b.length);
  let diferentes = 0;
  for (let i = 0; i < largo; i++) {
    if (a[i] !== b[i]) diferentes++;
  }
  return diferentes;
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
