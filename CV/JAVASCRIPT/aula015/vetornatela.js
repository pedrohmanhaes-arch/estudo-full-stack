let valores = [8, 1, 7, 4, 2, 9]

console.log('JEITO 1')
console.log(valores) //jeito 1

console.log("______________")

console.log('JEITO 2')
console.log(valores[0]) // jeito 2
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

console.log('____________________')
console.log('JEITO 3')

valores.sort()
for(i=0; i<valores.length; i++){ 
    console.log(` A posição ${i} tem o valor ${valores[i]}`) // jeito 4
}

console.log('______________________')
console.log("JEITO 4 - MAIS FÁCIL ")

for(let i in valores){ // JEITO 4  

    console.log(`a posição ${i} tem o valor ${valores[i]}`)
    }