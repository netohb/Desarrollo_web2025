class CuentaBancaria {
    constructor(titular, saldo, moneda) {
        this.titular = titular;
        this.saldo = saldo;
        this.moneda = moneda;
    }

    // Método 1: depositar dinero
    depositar(cantidad) {
        this.saldo += cantidad;
        return `Has depositado ${cantidad} ${this.moneda}.`;
    }

    // Método 2: retirar dinero
    retirar(cantidad) {
        if (cantidad > this.saldo) {
            return "Fondos insuficientes.";
        }
        this.saldo -= cantidad;
        return `Has retirado ${cantidad} ${this.moneda}.`;
    }

    // Método 3: mostrar saldo
    mostrarSaldo() {
        return `Saldo actual: ${this.saldo} ${this.moneda}`;
    }
}
