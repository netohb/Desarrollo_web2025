# SessionStorage en JavaScript

## ¿Qué es `sessionStorage`?
La propiedad `sessionStorage` permite acceder a un objeto Storage asociado a la sesión actual. 
La propiedad sessionStorage es similar a localStorage, la única diferencia es que la información almacenada en localStorage no posee tiempo de expiración, por el contrario la información almacenada en sessionStorage es eliminada al finalizar la sesion de la página. 
La sesión de la página perdura mientras el navegador se encuentra abierto, y se mantiene por sobre las recargas y reaperturas de la página.
Abrir una página en una nueva pestaña o ventana iniciará una nueva sesión, lo que difiere en la forma en que trabajan las cookies de sesión.


`sessionStorage` es parte de la API **Web Storage** en JavaScript.  
Sirve para **guardar información en el navegador de forma temporal**, es decir, **solo mientras la pestaña o ventana esté abierta**.  

Al cerrar la pestaña o navegador, los datos se eliminan automáticamente.  

---

## 🔹 Características principales
- Guarda información en **pares clave-valor**.
- Los valores siempre se guardan como **texto (string)**.
- Los datos son **temporales**: solo duran lo que la sesión del navegador.
- Cada pestaña del navegador tiene su propio `sessionStorage` independiente.
- Se diferencia de `localStorage` porque este último **sí persiste** aunque cierres el navegador.

---

## 🔹 Métodos más importantes
- **Guardar un dato:**
  - `sessionStorage.setItem("clave", "valor")`

- **Consultar un dato:**
  - `sessionStorage.getItem("clave")`

- **Verificar si existe un dato (comprobando `null`):**
  - `sessionStorage.getItem("clave") !== null`

- **Eliminar un dato específico:**
  - `sessionStorage.removeItem("clave")`

- **Borrar todo el almacenamiento de la sesión:**
  - `sessionStorage.clear()`

---

## Resumen
- Usa `sessionStorage` cuando necesites datos **temporales**.  
- Ideal para guardar información que solo deba durar mientras el usuario mantiene la pestaña abierta (por ejemplo: datos de un formulario en progreso, un carrito de compras provisional, o el estado temporal de una página).  
- Para almacenamiento persistente, utiliza `localStorage`.  
