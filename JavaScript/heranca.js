// Herança - Reutilização e manutenção
// Classe: Cão e Passaro

class Animal{//Superclasse - PAI
     constructor(){
      this.cor = ""
      this.tamanha = 0
      this.peso = 0 
}
 correr(){
        console.log("correr")
    }

    dormir(){
        console.log("dormir")
    }
}

class Cao extends Animal{//subclasse - filha
    latir(){
        console.log("latir")
    }
}

class Passaro extends Animal{//subclasse - filha
     voar(){
        console.log("voar")
    }
    }
   

// Instância

const cao = new Cao()
const passaro = new Passaro()

cao.correr()
cao.latir()
cao.dormir()
passaro.voar()
passaro.correr()
passaro.dormir()

/* cao.correr()
cao.latir()
passaro.correr()
passaro.voar()
passaro.latir() */