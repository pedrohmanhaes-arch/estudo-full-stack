// Herança - Reutilização e manutenção
// Classe: Cão e Passaro

class Animal{//Superclasse - PAI
     constructor(pCor, pTamanho, pPeso){
       console.log("construtor animal")
      this.cor = pCor
      this.tamanho = pTamanho
      this.peso = pPeso
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
    constructor(pCor, pTamanho, pPeso,pOrelha){
      super(pCor, pTamanho, pPeso)
      this.tamanhoOrelha = pOrelha
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
  constructor(pCor, pTamanho, pPeso, pFalar){
      super(pCor, pTamanho, pPeso)
  }
      correr(){
       super.correr()
       console.log("passaro")
     }
     voar(){
        console.log("voar")
    }
}

class Papagaio extends Passaro {
  constructor(pCor, pTamanho, pPeso, pFalar){
      super(pCor, pTamanho, pPeso)
      this.sabeFalar = pFalar
  }
  falar(){
    console.log("falar")
  }
}
   

// Instância

// const animal = new Animal("Amarelo", 60, 3)
// console.log(animal.tamanho + "cm")
// console.log(animal.peso + "kg")

// const passaro = new Passaro()
// passaro.correr()
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

/*const cao = new Cao("caramelo", 40, 2, 3)
console.log("cachorro cor " + cao.cor, ", " + "pesa " + cao.peso + "kg" + ", " + "tem " + cao.tamanho +"cm " + "de altura" + ", " + "e " + cao.tamanhoOrelha + "cm de orelha")*/
// cao.correr()

const papagaio = new Papagaio("verde", 30, 800, "bocó")
console.log("papagaio cor " + papagaio.cor + ", " + "tem " + papagaio.tamanho + "cm" + ", " + "pesa " + papagaio.peso + "g e fala " + papagaio.sabeFalar )