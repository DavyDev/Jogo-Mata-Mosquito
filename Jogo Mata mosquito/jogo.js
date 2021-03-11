
//Largura e Altura
var largura = 0
var altura = 0
var vidas = 1
var temporizador = 20
var nivel = window.location.search
nivel = nivel.replace("?", "")
var rapidez_Mosquito = 1500

if (nivel === "Normal") {
    rapidez_Mosquito = 1500
}
else if (nivel === "Dificil"){
    rapidez_Mosquito = 1000
}
else if (nivel === "The_Flash"){
    rapidez_Mosquito =750
}

function redimencionaPalco_Jogo() {
    largura = window.innerWidth
    altura = window.innerHeight
    console.log(largura , altura)
    
}


redimencionaPalco_Jogo()



var cronometro =  setInterval(function () {
    
    temporizador -= 1 
    
    document.getElementById("temporizador").innerHTML = temporizador


    if(temporizador <= 0) {

        clearInterval(cronometro)
        clearInterval(criaMosquito)

        window.location.href = "vitoria.html"
    }
    else{

    
    }
        
}, 1000)

    



function posicao_Randomica() {

    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()

        if(vidas > 3){
            window.location.href = "fim_do_jogo.html"
        }
        else{
            document.getElementById("vida" + vidas ).src = "/Imagens/coracao_vazio.png"
            vidas += 1
        }
    }

    var posição_X = (Math.floor(Math.random() * largura ) - 90)
    var posição_Y = (Math.floor(Math.random() * altura  ) - 90)

    console.log(posição_X , posição_Y)

    if(posição_X < 0){
        posição_X = 0
    }
    else if(posição_Y < 0){
        posição_Y = 0
    }

    var mosquito = document.createElement("img")
    mosquito.src = "/Imagens/mosca.png"
    mosquito.className = tamanho_Randomico() + " " + lado_Randomico()
    mosquito.style.left = posição_X + "px"
    mosquito.style.top = posição_Y + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
       this.remove()
        
    }


    document.body.appendChild(mosquito)
    
    console.log(mosquito)

    console.log(lado_Randomico())


}

function tamanho_Randomico() {
    var tamanho = Math.floor(Math.random() * 3)

    switch(tamanho){
        case 0:
            return "mosquito1"

        case 1:
            return "mosquito2"

        case 2:
            return "mosquito3"
    }

    console.log(tamanho)

}

function lado_Randomico() {
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return "ladoA"

        case 1:
            return "ladoB"
    }

}



