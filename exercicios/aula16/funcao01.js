function parimpar(num) {
    if (num % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

//armazenando na variável res o retorno da função com o parâmetro 10
let res = parimpar(10)
//exibindo a variável
console.log(res)

//chamando e exibindo o resultado no mesmo comando
console.log(parimpar(7))