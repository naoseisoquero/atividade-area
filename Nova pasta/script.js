import { calcularAreaCirculo, calcularPerimetroCirculo, nomeCirculo } from "./circulo.js";
import { calcularAreaQuadrado, calcularPerimetroQuadrado, nomeQuadrado } from "./quadrado.js";

const lado = document.getElementById('lado1');
const raio = document.getElementById('raio1');
const resposta1 = document.getElementById('resultado1');
const resposta2 = document.getElementById('resultado2');
const botao = document.getElementById('calcular-btn');

botao.addEventListener('click', () => {
    const lado1 = parseFloat(lado.value);
    const raio1 = parseFloat(raio.value);

    if (isNaN(lado1) || lado1 <= 0) {
        resposta1.innerText = "Por favor, insira um valor válido para o lado do quadrado.";
    } else {
        const perimetroQuadrado = calcularPerimetroQuadrado(lado1).toFixed(2);
        const areaQuadrado = calcularAreaQuadrado(lado1).toFixed(2);
        resposta1.innerText = `O perímetro do ${nomeQuadrado} é ${perimetroQuadrado} e sua área é ${areaQuadrado}.`;
    }

    if (isNaN(raio1) || raio1 <= 0) {
        resposta2.innerText = "Por favor, insira um valor válido para o raio do círculo.";
    } else {
        const perimetroCirculo = calcularPerimetroCirculo(raio1).toFixed(2);
        const areaCirculo = calcularAreaCirculo(raio1).toFixed(2);
        resposta2.innerText = `O perímetro do ${nomeCirculo} é ${perimetroCirculo} e a área é ${areaCirculo}.`;
    }
});
