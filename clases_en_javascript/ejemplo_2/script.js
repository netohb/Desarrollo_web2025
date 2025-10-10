class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    // Método 1: calcular área
    calcularArea() {
        return this.ancho * this.alto;
    }

    // Método 2: calcular perímetro
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }

    // Método 3: verificar si es cuadrado
    esCuadrado() {
        return this.ancho === this.alto;
    }
}
