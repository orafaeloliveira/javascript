function contar() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var int = document.getElementById('int')
    var res = document.getElementById('res')
    
    if (start.value.length == 0 || end.value.length == 0 || int.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar! \u{1F615}`
    } else {
        res.innerHTML = 'Contando: <br>'
        let s = start.valueAsNumber
        let e = end.valueAsNumber
        let i = int.valueAsNumber

        if (i <= 0) {
            i = 1
            alert('Passo inválido! Considerando passo 1.')
        }
        //contando e concatenando os resultados em res
        if (s < e) {
            //contagem crescente
            for (let c = s; c <= e; c += i) {
                res.innerHTML += ` \u{1F449} ${c}`
            }
        } else {
            //contagem decrescente
            for (let c = s; c >= e; c -= i) {
                res.innerHTML += ` \u{1F449} ${c}`
            }
        }
        res.innerHTML += ' \u{1F3C1}'
    }
}

function limpar() {
    res.innerHTML = 'Preparando a contagem:'
}