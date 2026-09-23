let num = [5, 8, 2, 9, 3]
num[3]=6 // adicionar ao elemento nº3
num.push(7) // adicionar no final da lista
num.sort() //ordem crescente

num.length //número de elementos dentro do Array

console.log(`Nosso vetor é o ${num}`)
console.log(`O Array tem ${num.length} elementos`)


for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

let pos = num.indexOf(8)

console.log(`O valor 8 está na posição ${pos}`) // posição do valor na posição 8