// Importanto las clases
import { Cliente } from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";

const cuentaDeLuis = new CuentaCorriente();
let saldo = cuentaDeLuis.verSaldo();
console.log("El saldo actual es" + saldo);

/* Ejemplos para crear isntancias de las propiedades de la clase Cuenta corriente*/
// Deposito a la cuenta corrienta
saldo = cuentaDeLuis.depositoEnCuenta(100);
console.log("El nuevo saldo es" + saldo);
// Retiro de la cuenta corrienta
cuentaDeLuis.retiroEnCuenta(1000);
console.log("El nuevo saldo es" + saldo);
// Nuevo deposito a la cuenta corrienta
cuentaDeLuis.depositoEnCuenta(-1000);
console.log("El saldo actual es" + saldo);
