// Parâmetros padrão
function somar(numero1, numero2){
  numero1 = isNaN(numero1) ? 0 : numero1
  numero2 = isNaN(numero2) ? 0 : numero2
  return numero1 + numero2
}


//Valor padrão do es2015 (manuira mais interessante de definir valor padrão)
function somar(numero1=0, numero2=0){
  numero1 = isNaN(numero1) ? 0 : numero1
  numero2 = isNaN(numero2) ? 0 : numero2
  return numero1 + numero2
}
  
//somar(2) //true
// Nan -> Not a Number (Não é um número)
// isNaN(10) //false
// isNaN("jamilton") //true


//Parâmetros e retornos opcionais
function calcularSalario(salario, desconto){
  // desconto = isNaN(desconto) ? 0: desconto
  if( salario == 0){
    console.log("Salário não informado")
    return 0
  }else{
    return salario - desconto
  }
  
}

let resultado = calcularSalario(0, 20)
console.log(resultado)