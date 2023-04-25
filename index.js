let jogador = "X"
let casa1 = document.querySelector(".item1")
let casa2 = document.querySelector(".item2")
let casa3 = document.querySelector(".item3")
let casa4 = document.querySelector(".item4")
let casa5 = document.querySelector(".item5")
let casa6 = document.querySelector(".item6")
let casa7 = document.querySelector(".item7")
let casa8 = document.querySelector(".item8")
let casa9 = document.querySelector(".item9")
let infoJogadorAtual = document.querySelector(".jogadorAtual")
let vencedor = document.querySelector(".vencedor")
let velha = false
let pontosX = 0
let pontosO = 0
let pontosXhtml = document.querySelector(".PX")
let pontosOhtml = document.querySelector(".PO")

function estadoTabuleiro() {
    let tabuleiro = []
    tabuleiro.push(casa1.innerText); tabuleiro.push(casa2.innerText); tabuleiro.push(casa3.innerText);
    tabuleiro.push(casa4.innerText); tabuleiro.push(casa5.innerText); tabuleiro.push(casa6.innerText);
    tabuleiro.push(casa7.innerText); tabuleiro.push(casa8.innerText); tabuleiro.push(casa9.innerText);

    if (tabuleiro[0] == "X" & tabuleiro[1] == "X" & tabuleiro[2] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[3] == "X" & tabuleiro[4] == "X" & tabuleiro[5] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[6] == "X" & tabuleiro[7] == "X" & tabuleiro[8] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[0] == "X" & tabuleiro[3] == "X" & tabuleiro[6] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[1] == "X" & tabuleiro[4] == "X" & tabuleiro[7] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[2] == "X" & tabuleiro[5] == "X" & tabuleiro[8] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[0] == "X" & tabuleiro[4] == "X" & tabuleiro[8] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else if (tabuleiro[2] == "X" & tabuleiro[4] == "X" & tabuleiro[6] == "X"){
        vencedor.style.display = "initial"
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        pontosX += 1
    } else{ velha = true }
    
    if (tabuleiro[0] == "O" & tabuleiro[1] == "O" & tabuleiro[2] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[3] == "O" & tabuleiro[4] == "O" & tabuleiro[5] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[6] == "O" & tabuleiro[7] == "O" & tabuleiro[8] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[0] == "O" & tabuleiro[3] == "O" & tabuleiro[6] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[1] == "O" & tabuleiro[4] == "O" & tabuleiro[7] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[2] == "O" & tabuleiro[5] == "O" & tabuleiro[8] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[0] == "O" & tabuleiro[4] == "O" & tabuleiro[8] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else if (tabuleiro[2] == "O" & tabuleiro[4] == "O" & tabuleiro[6] == "O"){
        vencedor.innerHTML = `Vencedor!<br>${jogador}`
        vencedor.style.display = "initial"
        pontosO += 1
    } else{ velha = true }

    if (casa1.innerText != "" & casa2.innerText != "" & casa3.innerText != ""){
        if (casa4.innerText != "" & casa5.innerText != "" & casa6.innerText != ""){
            if (casa7.innerText != "" & casa8.innerText != "" & casa9.innerText != ""){
                if (velha == true){
                    vencedor.style.display = "initial"
                    vencedor.innerHTML = "Deu velha!"
                }
            }
        }
    }

    pontosXhtml.innerHTML = `Jogador X: ${pontosX}`
    pontosOhtml.innerHTML = `Jogador O: ${pontosO}`
}

document.querySelector(".limpar").addEventListener("click", () => {
    casa1.innerText = ""; casa2.innerText = ""; casa3.innerText = "";
    casa4.innerText = ""; casa5.innerText = ""; casa6.innerText = "";
    casa7.innerText = ""; casa8.innerText = ""; casa9.innerText = "";

    vencedor.style.display = "none"
})

document.querySelector(".zerar").addEventListener("click", ()=>{
    pontosO = 0
    pontosX = 0
    pontosXhtml.innerHTML = `Jogador X: ${pontosX}`
    pontosOhtml.innerHTML = `Jogador O: ${pontosO}`
})

casa1.addEventListener("click", () =>{
    if (casa1.innerText == ""){
        casa1.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa2.addEventListener("click", () =>{
    if (casa2.innerText == ""){
        casa2.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa3.addEventListener("click", () =>{
    if (casa3.innerText == ""){
        casa3.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa4.addEventListener("click", () =>{
    if (casa4.innerText == ""){
        casa4.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa5.addEventListener("click", () =>{
    if (casa5.innerText == ""){
        casa5.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa6.addEventListener("click", () =>{
    if (casa6.innerText == ""){
        casa6.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa7.addEventListener("click", () =>{
    if (casa7.innerText == ""){
        casa7.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa8.addEventListener("click", () =>{
    if (casa8.innerText == ""){
        casa8.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
casa9.addEventListener("click", () =>{
    if (casa9.innerText == ""){
        casa9.innerText = jogador
        estadoTabuleiro()
        if (jogador == "X"){
            jogador = "O"
        } else{
            jogador = "X"
        }
    }
    infoJogadorAtual.innerText = `Jogador atual: ${jogador}`
})
