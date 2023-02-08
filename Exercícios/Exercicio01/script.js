function carregar(){
    var mensagem = document.querySelector('div#mensagem')
    var imagem = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = (`Agora são ${hora} horas.`)
    if (hora >= 0 && hora < 12){
        imagem.src = 'Amanhecer001.png'
        document.body.style.background = '#6B8E23'
    } else if (hora < 18 && hora <= 18){
        imagem.src = 'entardecer001.png'
        document.body.style.background = '#FFA500'
    } else{
        imagem.src = 'noite.png'
        document.body.style.background = '#202020'
    }
}