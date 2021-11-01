function calcular() {
    let num = document.getElementById('number')
    let tab = document.getElementById('tab')
    
    if (num.value.length == 0){
        alert('[ERRO] Insira um número!')
    } else {
        tab.innerHTML = 'Digite um número acima'
        for (let i = 1; i <= 10; i++) {
            //criando elementos option dinamicamente
            let item = document.createElement('option')

            //parte de dentro do option recebe o texto formatado
            item.text = `${num.value} x ${i} = ${num.value * i}`
            
            //alterando o value das options
            //útil quando for preciso ler a opção escolhida no back-end
            item.value = `tab${i}`
            
            //adicionando as options dentro do selection
            tab.appendChild(item)
        }
    }
}