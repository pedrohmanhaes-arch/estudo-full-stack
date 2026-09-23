
/*Estruturas Condicionais if else
- Verificar idade para entrar em sites
- Verificar se a compra é maior que o pedido mínimo    
- Verificar se tem acesso a recursos pagos
*/

// if(idade >= 18 && idade <= 25) {
//     console.log("Ganhou desconto de 10% na compra");
// } else {
//     console.log("Não ganhou desconto");
// }


// let idade = 30
// let compras = 500

// if(idade >= 40 || compras >= 400) {
//     console.log("Ganhou desconto de 10% na compra");
// } else {
//     console.log("Não ganhou desconto");
// }

let opcao = 1

if(opcao == 1) {
    console.log("Saldo conta"); 
} else if(opcao == 2) {
    console.log("Extrato conta");
} else if(opcao == 3) {
    console.log("cartão de crédito");
} else {
    console.log("Opção inválida");
}