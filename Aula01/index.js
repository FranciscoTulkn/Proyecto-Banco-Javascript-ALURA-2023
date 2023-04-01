class Cliente {
  nombreCliente;
  dniCliente;
}

class CuentaCorriente{
  numero;
  #saldo; //Atributo con caracteristica de variable privada.
  agencia;

  // metodos
  // Metodo para inicializar los valores de los atributos de la cuenta corriente
  constructor (){
    this.numero = "";
    this.#saldo = 0;
    this.agencia = "";
  }

  // Metodo para el deposito en la cuenta
  depositoEnCuenta(valor){
    if (valor > 0);
      this.#saldo += valor;
  }

  // Metodo para el retiro en la cuenta
  retiroEnCuenta(valor){
    if (valor <= this.#saldo);
      this.#saldo -= valor;
  }
}
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
