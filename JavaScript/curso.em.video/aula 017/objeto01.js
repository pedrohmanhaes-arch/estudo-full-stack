let amigo = {nome: 'José', sexo: 'M', peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
/* console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)
console.log(amigo.engordar) */