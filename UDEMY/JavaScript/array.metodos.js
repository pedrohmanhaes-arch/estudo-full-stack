const estados = ["São Paulo", "Ceára", "Rio de Janeiro", "Bahia", "Minas Gerais"]

/*** Remove elementos do array */

// estados.pop() // remove último elemento do array
// estados.shift() // remove o primeiro elemento do array


//*** Adiciona novo elemento no array */

// estados.push("último item") // adiciona no final do array
// estados.unshift("primeiro item") // adiciona no começo do array

/*** Retorna novo array 
const novo = estados.splice(0, 2, "teste1") //emendar/ retirar e adicionar itens de um array antigo para um novo array. e o array antigo fica apenas com os itens retirados

const novo = estados.slice(2,4) // cortar = cria novo array com os itens cortados*/

/** Converter Array / String */

const usuarios = ["Jamilton", "Ana", "Carla"]
let texto = usuarios.join() //converter para texto
let arrayTexto = texto.split(",") // converter para array

console.log(arrayTextoexto)