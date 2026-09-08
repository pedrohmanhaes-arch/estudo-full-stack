// Métodos - Parâmetros e retornos
class Usuario {
  constructor(){
    this.email = ""
    this.senha = ""
    this.subtotalCompra = 0
  }
  
  logar(){
    
    let emailBD = "ja@gmail.com"
    let senhaBD = "1234"
    
    if(senhaBD == this.senha){
      // console.log("senha válida")
    }else{
      // console.log("senha inválida")
      return "senha inválida"
    } 
  }
  calcularDesconto(cupom){
    let desconto = 0
    if(cupom =="DESC20"){
      desconto = 20
    }else if(cupom == "FESTA10"){
      desconto = 10
    }
    return this.subtotalCompra - desconto
    
    return total
  }
}

const usuario = new Usuario
usuario.subtotalCompra = 500
usuario.calcularDesconto("FESTA10")
/*  usuario.email = "ja@gmail.com"
  usuario.senha = "1234"

usuario.logar()*/