# 📘 Investigación sobre métodos de Jest para validaciones con `expect()`

Este documento contiene la explicación completa de los métodos más comunes usados con `expect()` en la librería **Jest**.

---

## Introducción a Jest y expect()

Jest es un framework de pruebas muy usado en JavaScript por su facilidad, rapidez y amplia cantidad de matchers (validadores).  
El método principal para realizar una afirmación es:

```js
expect(valor).matcher(valorEsperado)

```


## 📌 Métodos investigados

A continuación se presenta la investigación de cada método solicitado.

### 1. .toEqual()

Compara valores o estructuras (objetos/arreglos) verificando que todo su contenido sea equivalente.

🔹 A diferencia de .toBe(), no compara referencias, sino el contenido.

Ejemplo:
```js
expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
expect([1, 2]).toEqual([1, 2]);

```

### 2. .toBeTruthy()

Valida que el valor sea truthy, es decir, que en una evaluación booleana resulte verdadero.

Valores considerados truthy:

cualquier objeto

cualquier string no vacío

cualquier número distinto de 0

arrays no vacíos, etc.

Ejemplo:

```js

expect("hola").toBeTruthy();
expect(10).toBeTruthy();
expect({}).toBeTruthy();

```

### 3. .toBeFalsy()

Valida que el valor sea falsy, es decir, que su evaluación booleana sea falsa.

Valores falsy:

false

0

"" (string vacío)

null

undefined

NaN

Ejemplo:

```js

expect(0).toBeFalsy();
expect("").toBeFalsy();
expect(undefined).toBeFalsy();

```

### 4. .toBeNull()

Valida exclusivamente que el valor sea null.

Ejemplo:

```js

expect(null).toBeNull();

```

### 5. .toBeUndefined()

Valida que el valor sea exactamente undefined.

Ejemplo:

```js
let x;
expect(x).toBeUndefined();

```

### 6. .toThrow()

Valida que una función lance un error.

Esto permite comprobar errores sin usar try/catch.

⚠️ Regla importante:
Debe pasarse la función, NO la ejecución de la función.

Ejemplo correcto:

```js
function dividir(a, b) {
  if (b === 0) throw new Error("División entre cero");
  return a / b;
}

expect(() => dividir(10, 0)).toThrow();

```

Ejemplo incorrecto:

```js

expect(dividir(10, 0)).toThrow(); // ❌ incorrecto

```


También puede validarse un mensaje en específico:

```js
expect(() => dividir(10, 0)).toThrow("División entre cero");

```

### 7. .toStrictEqual()

Es similar a .toEqual() pero más estricto:

Revisa tipo, estructura, orden, valores.

No permite propiedades faltantes o adicionales.

Detecta diferencias mínimas.

Ejemplo:

```js

expect({ a: 1 }).toStrictEqual({ a: 1 }); // ✓
expect([1, undefined]).toStrictEqual([1]); // ✗ falla

```


.toStrictEqual() se usa cuando se necesita validar objetos idénticos en forma y contenido.
