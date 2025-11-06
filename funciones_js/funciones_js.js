(function () {
    "use strict";

    // Función 1

    function saludarUsuario(nombre) {
        console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");
    }

    saludarUsuario("Neto");

    // funcion 2

    function repetir_texto(texto, veces) {
        return (texto + " ").repeat(veces);
    }

    console.log(repetir_texto("Hola", 3));

    // funcion square

    function square(number) {
        return number * number;
    }

    console.log(square(6)); // Ejemplo de uso

    // funcion 3

    function invertir_palabra(palabra) {
        return palabra.split("").reverse().join("");
    }

    console.log(invertir_palabra("Diego Go"));

    // funcion 4
    function contar_vocales(texto) {
        const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
        let cont = 0;
        for (let char of texto) {
            if (set.has(char)) {
                cont++;
            }
        }
        return cont;
    }

    console.log(contar_vocales("Netito"));


    // funcion 5
    function mayusculas_y_minusculas(texto) {
        let mayusculas = texto.toUpperCase();
        let minusculas = texto.toLowerCase();
        return mayusculas + " ; " + minusculas;
    }

    console.log(mayusculas_y_minusculas("El verdadero Poder"));

    // funcion 6
    function promedio_lista(numeros) {
        let suma = 0;
        for (let num of numeros) {
            suma += num;
        }
        return suma / numeros.length;
    }

    console.log(promedio_lista([7, 8, 4, 8, 14]));

    // funcion 7
    function maximo_y_minimo(numeros) {
        let maximo = Math.max(...numeros);
        let minimo = Math.min(...numeros);
        return maximo + " ; " + minimo;
    }

    console.log(maximo_y_minimo([20, 5, 99, 4, 2]));

    // funcion 8
    function filtrar_pares(numeros) {
        let pares = [];
        for (let num of numeros) {
            if (num % 2 === 0) {
                pares.push(num);
            }
        }
        return pares;
    }

    console.log(filtrar_pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    // funcion 9
    function sumar_elementos_texto(lista) {
        return lista.join(" ");
    }

    console.log(sumar_elementos_texto(["Hola", "parse", "como", "estas?"]));

    // funcion 10
    function buscar_elemento(lista, elemento) {
        return lista.includes(elemento);
    }

    console.log(buscar_elemento([1, "rosa", "gilberto", 4, 5], "rosa"));

    // funcion 11

    function contar_palabras(frase) {
        let palabras = frase.split(" ");
        return palabras.length;
    }

    console.log(contar_palabras("Hola como estas amigo mio"));

    // funcion 12
    function duplicar_elementos(lista) {
        let duplicados = [];
        for (let elemento of lista) {
            duplicados.push(elemento * 2);
        }
        return duplicados;
    }

    console.log(duplicar_elementos([500, 7, 99, 4, 33]));

    // funcion 13
    function capitalizar_palabras(frase) {
        let palabras = frase.split(" ");
        for (let i = 0; i < palabras.length; i++) {
            palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
        }
        return palabras.join(" ");
    }

    console.log(capitalizar_palabras("hola a TODOS mis CUÑADOS"));


    // funcion 14
    function mezclar_listas(lista1, lista2) {
        let combinada = [];
        let long = Math.min(lista1.length, lista2.length);
        for (let i = 0; i < long; i++) {
            combinada.push(lista1[i]);
            combinada.push(lista2[i]);
        }

        let dif = Math.abs(lista1.length - lista2.length);
        if (dif > 0) {
            if (lista1.length > lista2.length) {
                for (let i = long; i < lista1.length; i++) {
                    combinada.push(lista1[i]);
                }
            } else {
                for (let i = long; i < lista2.length; i++) {
                    combinada.push(lista2[i]);
                }
            }
        }
        return combinada;
    }

    console.log(mezclar_listas([1, 3, 5, 9, 20, 88], ["a", "b", "c", "girasol"]));

    // funcion 15
    function contar_frecuencia(lista) {
        let frecuencia = {};
        for (let elemento of lista) {
            if (frecuencia[elemento]) {
                frecuencia[elemento]++;
            } else {
                frecuencia[elemento] = 1;
            }
        }

        return frecuencia;

    }

    console.log(contar_frecuencia(["kiwi", "banana", "naranja", "manzana", "kiwi", "banana", "manzana"]));


})();