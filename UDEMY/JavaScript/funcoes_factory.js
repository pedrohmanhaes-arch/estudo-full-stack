// Factory - Design Pattern (padrão de design ou padrão de projeto)
// Padrão de projetos -> forma comum de resolver problemas

const produto1 = {
  nome: "Notebook",
  preco: 1200
}

const produto2 = {
  nome: "Notebook",
  preco: 1200
}

const ProdutoFactory = function(nome, preco){
  
  //dados
  
  return {
    nome,
    preco,
    recuperarAvaliacoes(){
      console.log(`Avaliações para ${this.nome}, R$${this.preco}`)
    }
  }
}

const produtoNovo = ProdutoFactory("Celular", 1200)
produtoNovo.recuperarAvaliacoes()
// console.log(produto)
