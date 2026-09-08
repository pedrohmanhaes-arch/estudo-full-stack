//Notação Literal


/* const hotel = {
    quartos:20,
    ocupados:10,
    piscinas: 2,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        return "Disponível " + res 
    }
}*/

// hotel.quartos = 25
// hotel['quartos'] = 30
// delete hotel.piscinas 
// console.log(hotel.piscinas)

// notação de construtor (objeto em branco)

/* const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
        let res = this.quartos - this.ocupados
        return "Disponível " + res 
    }

    hotel.quartos = 25
    console.log(hotel.quartos) */

    
//Criado classes (mais simples)

class Hotel {

    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }
    verificarDisponibilidade(){
        let res = this.quartos - this.ocupados
        return "Disponível " + res 
    }
}

const hotel = new Hotel()
hotel.verificarDisponibilidade()
console.log(hotel.quartos)
