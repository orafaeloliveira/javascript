function verificar(){
    var day = new Date()
    var year = day.getFullYear()
    var fyear = document.getElementById('txtyear')  
    var res = document.querySelector('div#res')
    //testando se o valor do formulário é igual a 0 ou maior que o ano atual
    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        //utilizando o operador ternário p/ atribuir genero
        var gender = fsex[0].checked?'Homem':'Mulher'
        //criando uma tag img no documento html
        var photo = document.createElement('img')
        //criando o atributo id = "photo"
        photo.setAttribute('id', 'photo')
        /**
            Utilizando if 
            if (fsex[0].checked) {
                var gender = 'Homem'
            } else if (fsex[1].checked) {
                var gender = 'Mulher'
            }
        */
        if (age < 12) {
            //alterando o atributo src da photo
            gender == 'Homem'?photo.setAttribute('src', `foto-bebe-m.png`):photo.setAttribute('src','foto-bebe-f.png')
        } else if (age < 30) {
            gender == 'Homem'?photo.setAttribute('src', 'foto-jovem-m.png'):photo.setAttribute('src','foto-jovem-f.png')
        } else if (age < 60) {
            gender == 'Homem'?photo.setAttribute('src', 'foto-adulto-m.png'):photo.setAttribute('src','foto-adulto-f.png')
        } else {
            gender == 'Homem'?photo.setAttribute('src', 'foto-idoso-m.png'):photo.setAttribute('src','foto-idoso-f.png')
        }

        res.innerHTML = `Detectamos: ${gender} com ${age} anos.`
        //adicionano um elemento filho a div res
        res.appendChild(photo)
        /**
            if (gender == 'Homem') {
                if (age < 12) {
                    photo.src = 'foto-bebe-m.png'
                } else if (age < 30) {
                    photo.src = 'foto-jovem-m.png'
                } else if (age < 60) {
                    photo.src = 'foto-adulto-m.png'
                } else {
                    photo.src = 'foto-idoso-m.png'
                }
            } else {
                if (age < 12) {
                    photo.src = 'foto-bebe-f.png'
                } else if (age < 30) {
                    photo.src = 'foto-jovem-f.png'
                } else if (age < 60) {
                    photo.src = 'foto-adulto-f.png'
                } else {
                    photo.src = 'foto-idoso-f.png'
                }
            }
        */
    }
}