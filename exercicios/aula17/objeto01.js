let amigo = {
    nome: 'Rafael',
    peso: 60,
    engordar(p=0) {
        console.log('Engordou')
        //this é uma autoreferência ao objeto
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)