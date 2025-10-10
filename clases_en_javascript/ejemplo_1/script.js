class Coche {

    // El constructor define los atributos
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Método 1: mostrar información
    mostrarInfo() {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }

    // Método 2: encender el coche
    encender() {
        console.log(`${this.marca} ${this.modelo} está encendido`);
    }

    // Método 3: calcular antigüedad
    calcularAntiguedad(añoActual) {
        return añoActual - this.año;
    }
}

// Crear una instancia 
const miCoche = new Coche("Toyota", "Corolla", 2018);

// Usar los métodos
miCoche.mostrarInfo();
miCoche.encender();
console.log(`Antigüedad: ${miCoche.calcularAntiguedad(2025)} años`);


