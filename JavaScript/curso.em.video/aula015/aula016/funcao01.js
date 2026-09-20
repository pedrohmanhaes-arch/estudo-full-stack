/* console.log('JEITO 1')
function parimp(n){
    if(n %2 == 0){
        return `O número ${n} é par`
    }else{
        return `O número ${n} é impar`
    }
}

console.log(parimp(100))

console.log('_____________________')
console.log('JEITO 2')

function parimp(n){
    if(n %2 == 0){
        console.log(`O número ${n} é par`)
    }else{
        console.log(`O número ${n} é impar`)
    }
}

parimp(23)

console.log('_____________________')
console.log('')

console.log('JEITO 3  - MAIS MODERNO')
console.log('FUNÇÃO TRADICIONAL')

function parimp(n) {   return n % 2 === 0 ? 'Par' : 'Ímpar'; }

console.log(parimp(4))

console.log('_____________________') */

console.log('JEITO 4  - MAIS MODERNO')
console.log('ARROW FUNCTION')

const parimp = n => n % 2 === 0 ? 'Par' : 'Ímpar';

console.log(parimp(10))