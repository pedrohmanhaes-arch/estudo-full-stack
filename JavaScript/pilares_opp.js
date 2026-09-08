// Pilar 1 - Abstração
/*
Modelo, Entidade, Identidade, Características e Ações */

class Carro{
    constructor(){
        this.marca = "Volkswagen"
        this.modelo = "Gol"
        this.cor = "Prata!"
        this.placa = "EMJ-2565"
    }
  ligar(){}
}

const carro = new Carro()
carro.modelo = "Golf"
console.log(carro.modelo) 

const carro2 = new Carro()
console.log(carro2.modelo)

// Loja virtual
class Produto{
  constructor(){
    
 //roupas
this.tamanho = "M",
this.cor = "Vermelhor",
this.preco = "45,90",
  
//Eletronicos
  this.altura = "50cm"
  this.largura = "30cm"
  
  
  }
}




