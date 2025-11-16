const {
    sumar,
    multiplicar,
    obtenerNull,
    obtenerUndefined,
    dividir
} = require("./funciones-varias");

describe("Pruebas de matchers de Jest", () => {

    test("toEqual: la suma debe ser correcta", () => {
        expect(sumar(2, 3)).toEqual(5);
    });

    test("toStrictEqual: multiplicar debe regresar el valor exacto", () => {
        expect(multiplicar(2, 4)).toStrictEqual(8);
    });

    test("toBeTruthy: sumas positivas deben ser truthy", () => {
        expect(sumar(1, 1)).toBeTruthy();
    });

    test("toBeFalsy: multiplicar por 0 debe ser falsy", () => {
        expect(multiplicar(5, 0)).toBeFalsy();
    });

    test("toBeNull: debe regresar null", () => {
        expect(obtenerNull()).toBeNull();
    });

    test("toBeUndefined: debe regresar undefined", () => {
        expect(obtenerUndefined()).toBeUndefined();
    });

    test("toThrow: dividir entre cero debe lanzar error", () => {
        expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero");
    });

});
