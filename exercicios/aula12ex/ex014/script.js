function carregar() {
    var txthora = document.querySelector('p#hora')
    var foto = document.querySelector('img#foto')
    var mensagem = document.querySelector('p#msg')
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    var manha = '#E2CD9F'
    var tarde = '#B9846F'
    var noite = '#515154'

    txthora.innerHTML = `<p>Agora são ${hora} horas e ${minutos} minutos.</p>`

    if (hora < 5) {
        document.body.style.backgroundColor = noite
        foto.src = 'noite-250.jpg'
        mensagem.innerHTML = '<strong>Boa Madrugada!</strong>'
    } else if (hora < 12) {
        document.body.style.backgroundColor = manha
        foto.src = 'manha-250.jpg'
        mensagem.innerHTML = '<strong>Bom Dia!</strong>'
    } else if (hora < 18) {
        document.body.style.backgroundColor = tarde
        foto.src = 'tarde-250.jpg'
        mensagem.innerHTML = '<strong>Boa Tarde!</strong>'
    } else {
        document.body.style.backgroundColor = noite
        foto.src = 'noite-250.jpg'
    }
}