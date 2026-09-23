// Objetos literais - melhorias

let nome = "notebook"
let preco = 1200

/*const produto = {
  nome,
  preco,
  exibirProduto(){
    console.log(`${this.nome}, ${this.preco}, ${this.categoria}`)
  }
}*/

class Produto{
  constructor(){
    this.nome = ""
    this.preco = 0
  }
  
}

const produto = new Produto()

const pro = produto
pro.preco = 2000

console.log(pro.preco)
console.log(produto.preco)



/*
produto.categoria = "Eletrônicos"
produto.exibirPreco = function(){
  console.log(`Preço: R$${this.preco},00`)
}
produto.nome = "Alterar"
produto.exibirProduto()
produto.exibirPreco()




/*console.log(produto.nome)*/


