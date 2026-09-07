/* while(condição){
 Executa enquanto a condição é verdadeira)
}
 */

let postagens = [
    "Hoje passeando pela av. paulista",
    "passeando em Campos do Jordão",
    "Hoje fiz um curso de criação de sites",
    "Na casa da mamãe, aproveitando o dia!",
    "Indo Dormir",
    "Hoje passeando pela av. paulista",
    "passeando em Campos do Jordão",
    "Hoje fiz um curso de criação de sites",
    "Na casa da mamãe, aproveitando o dia!",
    "Indo Dormir"
]

const totalPostagens = postagens.length
console.log();
let numero = 0
while(numero < totalPostagens){
    console.log("IMAGEM " + numero)
    console.log(postagens[numero])
    console.log("----")
    numero = numero + 1
}

