
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    
    //remover a mosca anterior criada
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
    }  

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    //CASO A POSICAÇÃO SEJA INFERIOR A 0 SE FOR RECEBE 0 CASO CONTARIO RECEBE ELA MESMO
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    //criar o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()

    }
    
    document.body.appendChild(mosca)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}