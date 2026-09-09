// Herança - Reutilização e manutenção
// Classe: Cão e Passaro

class Animal{//Superclasse - PAI
     constructor(){
       console.log("construtor animal")
      this.cor = ""
      this.tamanha = 0
      this.peso = 0 
}
 correr(){
        console.log("correr")
        console.log("como")
        console.log("um")
         //imagine 30 linhas de código apenas sobre o método correr.
    }

    dormir(){
        console.log("dormir")
    }
}

class Cao extends Animal{//subclasse - filha
    constructor(){
      super()
      this.tamanhoOrelha = 0
    }
    
    correr(){
        super.correr()
        console.log("cão")
      //imagine +5 linhas de código abaixo desse método
    }
    
    latir(){
        console.log("latir")
    }
}

class Passaro extends Animal{//subclasse - filha
     voar(){
        console.log("voar")
    }
}

class Papagaio extends Passaro {
  falar(){
    console.log("falar")
  }
}
   

// Instância

const cao = new Cao()
cao.correr()
// passaro = new Passaro()
//const papagaio = new Papagaio()

/*papagaio.correr() //animal
papagaio.dormir() //animal
papagaio.voar() // passara
papagaio.falar() //papagaio

cao.correr()
cao.latir()
cao.dormir()
passaro.voar()
passaro.correr()
passaro.dormir()

 cao.correr()
cao.latir()
passaro.correr()
passaro.voar()
passaro.latir() */