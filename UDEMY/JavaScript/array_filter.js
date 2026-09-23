const usuarios = [
  {nome:"jamilton", idade: 32},
  {nome: "Ana", idade: 16},
  {nome: "Maria", idade: 40}
]

/*const funcao = function(item, i, arr){
  if(item.idade >= 18){
    return true // true ou false
  }else{
    return false
  }*/

/*const funcao = function(item, i, arr){
  return item.idade >= this.filtro  //metodo simplificado por false é o padrão da função 
}*/

/*const filtro = {
  filtro: 18
}

const usuariosMaiorIdade = usuarios.filter(funcao, filtro)
console.log(usuariosMaiorIdade)*/

const carros =[
  {nome: "Gol", marca: "volkswagen"},
  {nome: "iX35", marca: "hyundai"},
  {nome: "Santa fé", marca: "hyundai"},
  {nome: "Polo", marca: "volkswagen"}
]

  const carroFiltrado = carros.filter(
  carro => carro.marca == "hyundai")
  
  console.log(carroFiltrado)
