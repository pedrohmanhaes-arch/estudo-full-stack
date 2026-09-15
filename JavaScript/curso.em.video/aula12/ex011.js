var idade = 70
console.log(`Você tem ${idade} anos.`)
if(idade <16){
    console.log("Portanto seu voto não é obrigatório.")
}else if(idade < 18 || idade >= 70){
        console.log("Portanto seu é voto opcional.")
}else{
    console.log('Portanto seu voto obrigatório.')
}
