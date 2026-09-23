function contarQuantidadeLetras(produto){
  try {
    console.log( produto.nome.length ) 
    console.log("teste")
  } catch (erro){
    tratarErro(erro)
   } /* finally {
     console.log("finally")
  }*/
}

  function tratarErro(erro){
    throw new Error("código erro 164")
  }
  
const produto = {
  nom: "Notebook",
  preco: 1200
}

contarQuantidadeLetras(produto)
