// Importanto las clases
import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";
// // Constructor de cliente1
// const Cliente1 = new Cliente();
// // atributos de la clase cliente
// Cliente1.nombreCliente = "Leonardo";
// Cliente1.dniCliente = "27487092";
// // Constructor cuentacorriente1
// const cuentaCorriente1 = new CuentaCorriente();

// cuentaCorriente1.numero = "12345678";
// cuentaCorriente1.#saldo = 2000;

// // Cosntructor cliente2
// const Cliente2 = new Cliente();

// Cliente2.nombreCliente = "Maria";
// Cliente2.dniCliente = "67190153";

// // Constructor cuentacorriente2
// const cuentaCorriente2 = new CuentaCorriente();

// cuentaCorriente2.numero = "98754";
// cuentaCorriente2.#saldo = 8000;


// console.log(Cliente1);
// console.log(cuentaCorriente1);
// console.log(Cliente2);
// console.log(cuentaCorriente2);

/* Ejemplos para crear isntancias de las propiedades de la clase Cuenta corriente*/

const cuentaDeLuis = new CuentaCorriente();
cuentaDeLuis.depositoEnCuenta(800);
console.log(cuentaDeLuis.saldo);
cuentaDeLuis.retiroEnCuenta(1000);
console.log(cuentaDeLuis.saldo);
cuentaDeLuis.depositoEnCuenta(-1000);
console.log(cuentaDeLuis.saldo);
