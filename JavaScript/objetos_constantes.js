//produto = 1635 -> {nome: "Notebook"}
const produto = {
  nome: "Notebook"
}

Object.freeze( produto )
produto.nome = "Celular"
// produto.nome = "Celular"
console.log(produto)