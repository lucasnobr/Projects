/*
Carne - 400g por pessoa | +6h - 650g
Cerveja - 1200ml por pessoa | +6h - 2000ml
Refrigerantes/agua - 1000ml por pessoa | +6h = 1500ml
Crianças valem por 0,5
*/

let qtdAdultos = document.getElementById("adultos");
let qtdCriancas = document.getElementById("criancas");
let qtdDuracao = document.getElementById("duracao");

function calcular() {

    let adultos = qtdAdultos.value;
    let criancas = qtdCriancas.value;
    let duracao = qtdDuracao.value;

    let qtdCarne = adultos * carnePP(duracao) + ((criancas * carnePP(duracao)) / 2);
    let qtdCerveja = adultos * cervejaPP(duracao);
    let qtdBebida = adultos * bebidaPP(duracao) + ((criancas * bebidaPP(duracao)) / 2);

    tituloResultado.innerHTML = `<h1>Seu resultado</h1>`;
    textoResultado.innerHTML = `<p class="paragrafo">${qtdCarne / 1000}kg de carne</p>`;
    textoResultado.innerHTML += `<p class="paragrafo">${Math.ceil(qtdCerveja / 350)} latinhas de cerveja</p>`;
    textoResultado.innerHTML += `<p class="paragrafo">${Math.ceil(qtdBebida / 1000)} garrafas de 2l de bebida</p>`;
    textoResultado.innerHTML += `<form method="get" action="./index.html"><button type="submit">Limpar</button></form>`
 }

function carnePP (qtdDuracao) {
    if (qtdDuracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP (qtdDuracao) {
    if (qtdDuracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPP (qtdDuracao) {
    if (qtdDuracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}