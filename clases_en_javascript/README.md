# Conceptos básicos de Clases en JavaScript

## 1. ¿Qué es una clase en JavaScript?
Una **clase** es una plantilla para crear objetos.  
Te permite definir **propiedades** (atributos) y **métodos** (funciones) que los objetos creados a partir de la clase podrán usar.  

Se utilizan las clases con la palabra reservada `class`.

---

## 2. ¿Cómo se usan las clases?
Las clases se **instancian** con la palabra `new`.  
Cada objeto creado es independiente, pero comparte los métodos definidos en la clase.

---

## 3. Métodos dentro de una clase
Un **método** es una función asociada a la clase.  
Se escribe dentro de la clase, sin la palabra `function`.

---

## 4. Métodos estáticos
Los **métodos estáticos** no necesitan una instancia de la clase para ser llamados, se invocan directamente con el nombre de la clase.

---

## 5. Herencia
Una clase puede **heredar** de otra para reutilizar código con `extends`.

---

## 6. Diferencia entre métodos y funciones
- **Funciones**: se declaran fuera de las clases, son independientes.  
- **Métodos**: son funciones definidas dentro de una clase y se aplican a los objetos creados de esa clase.
