const tabuleiro = document.querySelectorAll("#item")
const vitoria = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

function iniciar(){
    let pontos_X = 0
    let pontos_O = 0
    for(let aux of tabuleiro){
        aux.innerHTML = ""
    }
    document.querySelector(".jogadorAtual").innerHTML = `Jogador atual: X`

    let jogadorXis = true;
    let jogador = "X"

    function jogador_X(elemento) {
        jogador = "X"
        elemento.innerHTML = jogador
        jogadorXis = false
    }
    function jogador_O(elemento) {
        jogador = "O"
        elemento.innerHTML = jogador
        jogadorXis = true
    }

    function checarVitoria(jogadorAtual){
        return vitoria.some(combinado =>{
            return combinado.every(index =>{
                return tabuleiro[index].innerText === jogadorAtual
            })
        })
    }
    function checarempate() {
        return [... tabuleiro].every(item =>{
            return item.innerHTML == "X" || item.innerHTML == "O"
        })
    }
    function fim(empate) {
        if(empate){
            document.querySelector(".vencedor h2").innerText = `Deu velha!`
        } else{
            document.querySelector(".vencedor h2").innerText = `${jogador} Venceu!`
            if (jogador === "X"){
                pontos_X += 1
                document.querySelector("#PX").innerHTML = `X = ${pontos_X}`
            } else{
                pontos_O += 1
                document.querySelector("#PO").innerHTML = `O = ${pontos_O}`
            }
        }
        document.querySelector(".vencedor").style.top = "0"
    }

    function inicio() {
        for(let aux of tabuleiro){
            aux.innerHTML = ""
            aux.addEventListener("click", () =>{
                jogadorXis ? jogador_X(aux): jogador_O(aux);
                if(jogador == "X"){
                    document.querySelector(".jogadorAtual").innerHTML = `Jogador atual: O` 
                } else {
                    document.querySelector(".jogadorAtual").innerHTML = `Jogador atual: X` 
                }
                const isWin = checarVitoria(jogador)
                const isDraw = checarempate()

                if(isWin){
                    fim(false)
                } else if(isDraw){
                    fim(true)
                }
            }, {once: true})
        }
    }
    inicio()
}
document.querySelector("#reiniciar").addEventListener("click", ()=>{
    document.querySelector(".vencedor").style.top = "-100vh"
    iniciar()
})

document.querySelector("#zerar").addEventListener("click", ()=>{
    pontos_X = 0; pontos_O = 0;
    document.querySelector("#PX").innerHTML = `X = ${pontos_X}`
    document.querySelector("#PO").innerHTML = `O = ${pontos_O}`
    iniciar()
})

iniciar()