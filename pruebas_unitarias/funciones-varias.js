// Suma
function sumar(a, b) {
    return a + b;
}

// Multiplicación
function multiplicar(a, b) {
    return a * b;
}

// Devuelve null
function obtenerNull() {
    return null;
}

// Devuelve undefined
function obtenerUndefined() {
    return undefined;
}

// Para probar toThrow
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}

module.exports = {
    sumar,
    multiplicar,
    obtenerNull,
    obtenerUndefined,
    dividir
};
