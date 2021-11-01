let array = []
let vet = document.getElementById('vet')
let res = document.getElementById('res')

function add() {
    let num = document.getElementById('num')
    if (num.value.length == 0||num.value > 100||num.value < 1){
        alert('Valor inválido ou já encontrado na lista')
    } else {
        let n = num.valueAsNumber
        
        if (array.indexOf(n) == -1) {
            let item = document.createElement('option')
            array.push(n)
            for (let pos in array) {
                item.text = `Valor ${array[pos]} adicionado`
                item.value = `vet${pos}`
                vet.appendChild(item)
                res.innerHTML = ''
            }
            num.value = ''
            num.focus()
        } else {
            alert('Valor já adicionado!')
        }
    }
}

function check() {
    res.innerHTML = ''
    if (array.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let size = array.length
        /*
            O problema desse modo é que ele ordena de forma alfanumérica (String).
            Se o vetor for "vetor = [5, 1, 10, 7]"
            O "vetor.sort()" vai ficar "vetor = [1, 10, 5, 7]"     como se fosse uma "String"
            para ordenar de forma númerica deve ser "vetor.sort((a, b) => a - b)"
            ficará "vetor = [1, 5, 7, 10]"
        */
        array.sort((a,b) => a - b)
        let big = array[size-1]
        let sum = 0

        for (let pos in array) {
            sum += array[pos]
        }
        let avg = sum / size

        res.innerHTML += `<p>Ao todo, temos ${size} números cadastrados.<p>`
        res.innerHTML += `<p>O maior valor informado foi ${big}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${array[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${avg}`
    }
}