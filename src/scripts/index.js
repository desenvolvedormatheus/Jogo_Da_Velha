const domTabuleiro = document.querySelectorAll("#item");
const domjogadorAtual = document.querySelector("#jogadorAtual");
const domZerar = document.querySelector("#zerar");
const domPX = document.querySelector("#PX");
const domPO = document.querySelector("#PO");
let selecionados = [];
let jogador = "X";
let vitorias = {
    "X": 0,
    "O": 0,
}

const vitoria = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

function iniciar(){
    domPX.innerHTML = `X = ${vitorias.X}`;
    domPO.innerHTML = `O = ${vitorias.O}`;
    jogador = "X";
    selecionados = [];
    domjogadorAtual.innerHTML = `Jogador atual: ${jogador}`;
    resetarEventosClick()
    criarEventosClick()
}; iniciar();

function criarEventosClick() {
    domTabuleiro.forEach(criarEvento);
}

function resetarEventosClick() {
    domTabuleiro.forEach(resetarEvento);
}

function criarEvento(item){
    item.innerHTML = "";
    item.addEventListener("click", click);
};

function resetarEvento(item) {
    item.removeEventListener("click", click);
    item.innerHTML = "";
}

function click(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", click)
    selecionados[index] = jogador;

    setTimeout(() => {
        checarVitoria();
    }, 500);

    jogador = jogador === "X" ? "O" : "X";
    domjogadorAtual.innerHTML = `Jogador atual: ${jogador}`;
}

function checarVitoria(){
    let ultimoJogador = jogador === "X" ? "O" : "X";

    const items = selecionados
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimoJogador)
    .map((item) => item[1]);

    for (pos of vitoria) {
        if (pos.every((item) => items.includes(item))) {
            alert(`O Jogador ${ultimoJogador} ganhou`);

            if(ultimoJogador === "X"){ vitorias.X += 1 }
            else if (ultimoJogador === "O"){ vitorias.O += 1 }
            else{ alert("Erro [J.E] contate o administrador do sistema!") }

            iniciar();
            return;
        }
    }

    if (selecionados.filter((item)=> item).length === 9) {
        alert("Empate!");
        iniciar();
        return;
    }
}

domZerar.addEventListener("click", ()=>{
    vitorias = {
        "X": 0,
        "O": 0
    }
    domPX.innerHTML = `X = ${vitorias.X}`;
    domPO.innerHTML = `O = ${vitorias.O}`;
})