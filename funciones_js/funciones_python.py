def saludar_usuario(nombre: str) -> None:
    """
    Imprime un saludo personalizado.
    Ejemplo de concatenación y salida por consola.
    """
    print("Hola, " + nombre + "! Bienvenido al curso de programación.")

saludar_usuario("Neto")

# función 2

def repetir_texto(texto: str, veces: int) -> str:
    """
    Devuelve una cadena repetida 'veces' veces, separada por espacios.
    Ejemplo de concatenación y multiplicación de strings.
    """
    return (texto + " ") * veces

print(repetir_texto("Hola", 3))

# función 3
def invertir_palabra(palabra: str) -> str:
    """
    Invierte una palabra usando slicing.
    """
    return palabra[::-1]

print(invertir_palabra("Python"))

# función 4
def contar_vocales(texto: str) -> int:
    """
    Cuenta cuántas vocales (a, e, i, o, u) hay en un texto.
    Ejemplo de bucles y condicionales.
    """
    contador = 0
    for letra in texto.lower():
        if letra in "aeiou":
            contador += 1
    return contador

print(contar_vocales("Hola Mundo"))

# función 5
def mayusculas_y_minusculas(texto: str) -> tuple[str, str]:
    """
    Devuelve el texto en mayúsculas y minúsculas.
    Ejemplo de métodos de string.
    """
    return texto.upper(), texto.lower()

print(mayusculas_y_minusculas("Python"))

# función 6
def promedio_lista(numeros: list[float]) -> float:
    """
    Calcula el promedio de una lista de números.
    Ejemplo de sumas y longitud de listas.
    """
    if len(numeros) == 0:
        return 0
    return sum(numeros) / len(numeros)

print(promedio_lista([10, 20, 30, 40, 50]))

# función 7
def maximo_y_minimo(numeros: list[int]) -> tuple[int, int]:
    """
    Devuelve el valor máximo y mínimo de una lista.
    Ejemplo de uso de funciones integradas.
    """
    return max(numeros), min(numeros)

print(maximo_y_minimo([3, 1, 4, 1, 5, 9, 2, 6, 5]))

# función 8
def filtrar_pares(numeros: list[int]) -> list[int]:
    """
    Filtra y devuelve solo los números pares de una lista.
    Ejemplo de comprensión de listas.
    """
    return [n for n in numeros if n % 2 == 0]

print(filtrar_pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

# función 9
def sumar_elementos_texto(lista_textos: list[str]) -> str:
    """
    Une todos los elementos de una lista de cadenas en una sola frase.
    Ejemplo de concatenación con 'join'.
    """
    return " ".join(lista_textos)

print(sumar_elementos_texto(["Este", "es", "un", "ejemplo", "de", "texto."]))

# función 10
def buscar_elemento(lista: list, elemento) -> bool:
    """
    Verifica si un elemento está dentro de una lista.
    Ejemplo de uso del operador 'in'.
    """
    return elemento in lista

print(buscar_elemento([1, 2, 3, 4, 5], 3))
print(buscar_elemento(["manzana", "banana", "cereza"], "naranja"))

# función 11
def contar_palabras(frase: str) -> int:
    """
    Cuenta cuántas palabras hay en una frase.
    Usa split() para separar por espacios.
    """
    palabras = frase.split()
    return len(palabras)

print(contar_palabras("Este es un ejemplo de frase."))

# función 12
def duplicar_elementos(lista: list[int]) -> list[int]:
    """
    Duplica cada número de una lista.
    Ejemplo de transformación con comprensión de listas.
    """
    return [x * 2 for x in lista]

print(duplicar_elementos([28, 2, 3, 47, 5]))

# función 13
def capitalizar_palabras(frase: str) -> str:
    """
    Convierte la primera letra de cada palabra en mayúscula.
    Similar a 'title()'.
    """
    return frase.title()

print(capitalizar_palabras("este es un ejemplo de frase."))

# función 14
def mezclar_listas(lista1: list, lista2: list) -> list:
    """
    Combina dos listas alternando sus elementos.
    Ejemplo de zip() y bucles.
    """
    combinada = []
    for a, b in zip(lista1, lista2):
        combinada.append(a)
        combinada.append(b)
    return combinada

print(mezclar_listas([1, 3, 5], ['a', 'b', 'c']))


# función 15
def contar_frecuencia(lista: list) -> dict:
    """
    Devuelve un diccionario con la frecuencia de cada elemento.
    Ejemplo de diccionarios y conteo.
    """
    conteo = {}
    for item in lista:
        if item in conteo:
            conteo[item] += 1
        else:
            conteo[item] = 1
    return conteo

print(contar_frecuencia(['manzana', 'banana', 'manzana', 'cereza', 'banana', 'manzana']))

