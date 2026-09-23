/* Funções
1) Desligar a torneira;
2) Pedir copo de água;
3) Ir ao mercado comprar arroz; */

// function desligarTorneira (){
//     console.log("Levantar do sofá");
//     console.log("Ir até a pia da cozinha");
//     console.log("desligar a torneira");
//     console.log("Voltar ao sofá");
// }

// desligarTorneira()

// function pedirCopoAgua(){
//     return "Copo Água"
// }

// let retorno = pedirCopoAgua()

// console.log(retorno);

// function irMercadoComprarArroz(dinheiro){
//     console.log("pegar transporte");
//     console.log("entrar mercado");
//     console.log("Achar arroz");
//     console.log("Pagar no caixa");
//     console.log("pegar transporte volta para a casa");

//         return "arroz"
// }

// let retorno = irMercadoComprarArroz(10)

function calcularMedia(nota1, nota2){

    let totalNotas = (nota1 + nota2) 
    let media = totalNotas / 2
    return media
}

let media = calcularMedia(8, 8)
console.log(media);