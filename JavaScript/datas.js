// Funções Nativas: Datas

const data = new Date()

data.toString() //data em formato de texto

// let d = data.getDate() // dia do mês
// data.getMonth() // retorna o mês de 0 a 11 - janeiro = 0, dezembro = 12 
// let m = data.getMonth() + 1 // retorna mês de 1 a 12.
// let a = data.getFullYear() // retorna o ano
// console.log(`Hoje é 0${d}/0${m}/${a}`)

// let h = data.getHours()
// let min = data.getMinutes()
// let s = data.getSeconds()

// console.log(`Agora são: ${h}:${min}:${s}`)

// Operações com datas
// data.setDate(data.getDate()) //determina um dia de data futura ou passada
// data.setMonth(data.getMonth()) // determina um mês de data futura ou passada
data.setFullYear(data.getFullYear() + 15) // determina um ano de data futura ou passada
let d = data.getDate() // dia do mês
data.getMonth() // retorna o mês de 0 a 11 - janeiro = 0, dezembro = 12 
let m = data.getMonth() + 1 // retorna mês de 1 a 12.
let a = data.getFullYear() // retorna o ano
console.log(`Hoje é ${d}/0${m}/${a}`)

data.setHours(data.getHours() +5) //determina uma hora futura ou passada
data.setMinutes(data.getMinutes() +55) //determina um minuto futuro ou passado
data.setSeconds(data.getSeconds() + 1500) //determina segundo futuro ou passado
let h = data.getHours()
let min = data.getMinutes()
let s = data.getSeconds()
console.log(`Agora são: ${h}:${min}:${s}`)