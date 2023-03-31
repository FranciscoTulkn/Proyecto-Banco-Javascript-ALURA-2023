class Cliente {
  nombreCliente;
  dniCliente;
}

class CuentaCorriente{
  numero;
  saldo; 
  agencia;

  // metodos
  depositoEnCuenta(valor){
    this.saldo += valor;
  }
}
// Constructor de cliente1
const Cliente1 = new Cliente();
// atributos de la clase cliente
Cliente1.nombreCliente = "Leonardo";
Cliente1.dniCliente = "27487092";
// Constructor cuentacorriente1
const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "12345678";
cuentaCorriente1.saldo = 2000;

// Cosntructor cliente2
const Cliente2 = new Cliente();

Cliente2.nombreCliente = "Maria";
Cliente2.dniCliente = "67190153";

// Constructor cuentacorriente2
const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "98754";
cuentaCorriente2.saldo = 8000;

// const Cliente3 = new Cliente();

// Cliente3.nombreCliente = "Juan";
// Cliente3.dniCliente = "87082671";
// Cliente3.numeroCuenta = "432876";
// Cliente3.saldoCuenta = 5000;

console.log(Cliente1);
console.log(cuentaCorriente1);
console.log(Cliente2);
console.log(cuentaCorriente2);