//criando vetor num
let num = [5, 8, 2, 9, 3]

//add valor 7 na posição 5
num[5] = 7
//add valor 1 na última posição
num.push(1)
//ordenando o vetor em ordem crescente
num.sort()

console.log(num)
//mostrando o número de elementos do vetor
console.log(`O vetor tem ${num.length} elementos`)
//mostrando um elemento específico
console.log(`O primeiro valor do vetor é ${num[0]}`)
//mostrando os elementos com um laço for tradicional
/**
    for (let pos = 0; pos < num.length; pos++) {
        console.log(`A posição ${pos} contém o valor ${num[pos]}`)
    }
*/
//mostrando os elementos com um laço for otimizado para arrays e objetos
//para cada pos (índice) em num (vetor) 
for (let pos in num) {
    console.log(`A posição ${pos} contém o valor ${num[pos]}`)
}
//procurando no vetor onde está o valor 7 e retornar a chave onde o valor se encontra
//quando não encontra o valor ele retorna -1
let val = num.indexOf(7)

if (val == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${val}`)
}