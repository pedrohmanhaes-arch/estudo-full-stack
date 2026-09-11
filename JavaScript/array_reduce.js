/*const numeros = [
  2,3,5]


//se iniciar acumular com indice 0
//primeira execução acumulador = 2 -> 2 + 3 = 5
//segunda execução = 5 + 5 = 10
// não tem terceira execução

//se iniciar acumulador 6
//primeira execução -> 6 + 2 = 8
//segunda -> 8 + 3 = 11
//terceira -> 11 + 5 = 16
const funcao = function(acumulador, atual, i, arr){
  console.log(i)
  console.log('ac: ' + acumulador)
  console.log('a: ' + atual)
  console.log("__________")
  return acumulador + atual
}

const resultado = numeros.reduce(funcao)
console.log(resultado)*/


/*const produtos = [
  {nome: "Notebook", promocao: true},
  {nome: "Celular", promocao: false},
  {nome: "Mouse", promocao: false},
]

const produtosPromo = produtos.map(
produto => produto.promocao
)

console.log(produtosPromo)
const funcao = function(acumulador, atual){
  console.log("ac: " + acumulador)
  console.log("a: " + atual)
  console.log("----------")


  return acumulador || atual // true
}

const novo = produtosPromo.reduce(funcao)
console.log(novo)
if(novo) console.log("Tem promocao")
*/


const lista =  [
  "Jamilton", "Ana", "Pedro"
]

/*let listaHtml = lista.reduce(
  (acumulado, atual) => {
    return acumulado += `<li>${atual}</li>`
  },""
)*/

/*let listaHtml = lista.reduce(
  (acumulado, atual) => acumulado += `<li>${atual}</li>`,""
)*/

const funcao = (acumulado, atual) => acumulado 
+= `<li>${atual}</li>`
let listaHtml = lista.reduce(
  funcao, ""
)

console.log(listaHtml)

