/*While
let numero = 0
while(numero <= 5){
    console.log("Executou " + numero)
   numero++
}// numero = numero + 1*/

/*let numero = 5
while(numero >= 0){
    console.log("Executou " + numero)
   numero--
}// numero = numero - 1
*/


//do...while
/*let numero = 5
do{
    console.log("Executou " + numero)
    numero--
}while(numero >= 1)
// numero = numero + 1*/

/*let numero = 5
while(numero <= 1){
    console.log("Executou " + numero)
   numero--
}// ronume = numero + 1*/

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

/*let total = postagens.length

for(let numero = 0; numero < total; numero ++){
    console.log(numero + 1 + " - " + postagens[numero])

}*/

for(indice in postagens){
    console.log((Number(indice) + 1) + " - " + postagens[indice])
}