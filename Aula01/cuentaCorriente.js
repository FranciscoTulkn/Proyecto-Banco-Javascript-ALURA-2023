// export class CuentaCorriente{

//   #cliente;
//   numero;
//   #saldo; //Atributo con caracteristica de variable privada.
//   agencia;

//   // metodos
//   // Metodo para inicializar los valores de los atributos de la cuenta corriente
//   constructor (){

//     this.#cliente = null;
//     this.numero = "";
//     this.#saldo = 0;
//     this.agencia = "";
//   }

//   // Metodo para el deposito en la cuenta
//   depositoEnCuenta(valor){
//     if (valor > 0);
//       this.#saldo += valor;
//   }

//   // Metodo para el retiro en la cuenta
//   retiroEnCuenta(valor){
//     if (valor <= this.#saldo);
//       this.#saldo -= valor;
//   }
// }

// Nuevo código
import { Cliente } from "./cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero;
    agencia;
    #saldo;

    set setCliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get getCliente() {
        return this.#cliente;
    }

    constructor() {
        this.#cliente = null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}