import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]")

async function criarCard(evento){

    evento.preventDefault();


    // DECLARAMOS NO FINAL O .VALUE POIS QUEREMO O VALOR QUE O USUÁRIO VAI DIGITAR
    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    
    try {
    await conectaApi.criaCard(imagem, nome, valor);

    window.location.href ="../index.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarCard(evento));