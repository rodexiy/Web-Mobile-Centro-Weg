const imagemCarro = document.getElementById("imagemCarro")
const respostas = document.getElementById("respostas")

let Pontos = 0;
let Nome = ""

let Rank = localStorage.getItem("Rank") ? JSON.parse(localStorage.getItem("Rank")) : []

let questaoAtual = 1;

const questoes = {
    [1]: {
        Imagem: "/Assets/accord.jpg",
        Respostas: [
            "Chevette",
            "Accord",
            "Civic",
            "Prelude"
        ],
        Correta: "Accord",
        Pontos: 1
    },

    [2]: {
        Imagem: "/Assets/488.png",
        Respostas: [
            "F40",
            "LaFerrari",
            "488",
            "SF90"
        ],
        Correta: "488",
        Pontos: 1
    },

    [3]: {
        Imagem: "/Assets/Evo7.jpg",
        Respostas: [
            "Evo 7",
            "Evo X",
            "Evo 5",
            "Evo 3"
        ],
        Correta: "488",
        Pontos: 1
    },

    [3]: {
        Imagem: "/Assets/ZL1.webp",
        Respostas: [
            "Camaro",
            "GT 2000",
            "GTR R35",
            "Eclipse"
        ],
        Correta: "488",
        Pontos: 1
    },
}

function Acertou() {
    Pontos += questoes[questaoAtual].Pontos

}


function RespostaEscolhida(resposta) {
    let respostaCorreta = questoes[questaoAtual].Correta

    if (respostaCorreta == resposta) {
        Acertou()
    }

    

    if (questaoAtual== Object.keys(questoes).length) {

    }else {
        questaoAtual += 1
        carregar()
    }

}


function carregar() {
    imagemCarro.src = questoes[questaoAtual].Imagem

    const resposta = document.querySelectorAll('.resposta');

    resposta.forEach(resposta => {
        resposta.remove();
    });

    for (let i = 0; i < questoes[questaoAtual].Respostas.length; i++) {
        let nomeCarro = questoes[questaoAtual].Respostas[i]
        let botaoResposta = document.createElement("p") 
        botaoResposta.className = "resposta"
        botaoResposta.textContent = nomeCarro
        respostas.appendChild(botaoResposta)

        botaoResposta.addEventListener("click", function() {
            RespostaEscolhida(nomeCarro)
        })
        
    }
}

carregar()

window.addEventListener('beforeunload', function (e) {
    localStorage.setItem("UserData", JSON.stringify(UserData))
});