

let jogo = [];       // vai guardar as posições das jogadas // matriz
let tabuleiro = [];  // visual
let quemJoga = 0;   // vai indicar de quem é a vez, 0=jogador,  1=cpu
let verifica;       // vai verificar se houve  vencedor ou não
let jogando = true;  // vai indicar se o jogo está  rolando ou não, começa em verdadeiro
let nivel = 1;          // nível de dificuldade
let jogadaCpu = 1;   // indica a jogada da cpu
let quemComeca = 1;


function cpuJoga() {
    if (jogando) {
        let linha, coluna;
        if (nivel == 1) {
            do {
                linha = Math.round(Math.random() * 2);  //sorteio de linha
                coluna = Math.round(Math.random() * 2); // sorteio de coluna
            } while (jogo[linha][coluna] != "");          // Enquanto linha e coluna for vazia ele  vai sorteando
            jogo[linha][coluna] = "O";
        } else if (nivel == 2) {
            //nivel 2
        }
        verifica = verificaVitoria();
        if (verifica != "") {
            alert(`${verifica} venceu!`);
            jogando = false;
        }
        atualizaTabuleiro();
        quemJoga = 0;
    }
}
function verificaVitoria() {
    let linha, coluna;
    //LINHAS
    for (linha = 0; linha < 3; linha++) {
        if ((jogo[linha][0] == jogo[linha][1] && jogo[linha][1] == jogo[linha][2])) {
            return jogo[linha][0];
        }
    }
    //COLUNAS
    for (coluna = 0; coluna < 3; coluna++) {

    }

    //DIAGONAIS
    if ((jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2])) {
        return jogo[0][0];
    }
    if ((jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0])) {
        return jogo[0][02];
    }
    return "";  // Caso nenhuma dessas opções não  retorne nada, ele  retorna vazio


}

function jogar(p) { // p = posição // jogador

    if ((jogando) && (quemJoga == 0)) {
        switch (p) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 9:
                if (jogo[2][2] == "") {
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
                break;
        }
        if (quemJoga == 1) {
            atualizaTabuleiro();
            verifica = verificaVitoria();
            if (verifica != "") {
                alert(`${verifica} venceu!`);
                jogando = false;
            }
        } cpuJoga();
    }

}

function atualizaTabuleiro() {  // vai ser  chamada após uma, do jogador ou cpu
    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            if (jogo[linha][coluna] == "X") {
                tabuleiro[linha][coluna].innerHTML = "X";
                tabuleiro[linha][coluna].style.cursor = "default";
            } else if (jogo[linha][coluna] == "O") {
                tabuleiro[linha][coluna].innerHTML = "O";
                tabuleiro[linha][coluna].style.cursor = "default";
            } else {
                tabuleiro[linha][coluna].innerHTML = "";
                tabuleiro[linha][coluna].style.cursor = "pointer";
            }
        }
    }

}

function inicia() {
    jogando = true;
    jogadaCpu = 1
    jogo = [                //matriz
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")],
    ]

}

window.addEventListener("load", inicia);