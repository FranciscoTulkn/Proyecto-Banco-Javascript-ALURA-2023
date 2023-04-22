// // Importanto las clases
// import { CuentaCorriente } from "./Aula01/cuentaCorriente.js";
// import {Cliente} from './Aula01/cliente.js';

// const cuentaDeLuis = new CuentaCorriente();
// let saldo = cuentaDeLuis.verSaldo();
// console.log("El saldo actual es" + saldo);

// /* Ejemplos para crear isntancias de las propiedades de la clase Cuenta corriente*/
// // Deposito a la cuenta corrienta
// saldo = cuentaDeLuis.depositoEnCuenta(100);
// console.log("El nuevo saldo es" + saldo);
// // Retiro de la cuenta corrienta
// cuentaDeLuis.retiroEnCuenta(1000);
// console.log("El nuevo saldo es" + saldo);
// // Nuevo deposito a la cuenta corrienta
// cuentaDeLuis.depositoEnCuenta(-1000);
// console.log("El saldo actual es" + saldo);


// Nuevo código

/*Importación de clases*/
import {Cliente} from './cliente.js'
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual (CuentaLeonardo) '+saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808';
cliente2.rutCliente = '8989';


const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

console.log (cuentaDeMaria.cliente);

cuentaDeMaria.cliente = 0;

console.log (cuentaDeMaria.cliente);

let parametroValor = 100;
/*
console.log('Parámetro Valor',parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log('Parámetro Valor',parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);



console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
*/