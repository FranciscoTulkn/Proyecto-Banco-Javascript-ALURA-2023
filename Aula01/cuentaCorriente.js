export class CuentaCorriente{
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