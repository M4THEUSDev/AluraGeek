import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, nome, valor) {
    const card = document.createElement("div");
    card.className = "card__item";
    card.innerHTML = `<div class="card__img">
    <img src="${imagem}">
</div>
<p>${nome}</p>
<div class="texto__final">
    <p>$ ${valor} </p>
    <p><i class="fa-regular fa-trash-can"></i></p>
</div>`

    return card;
}


async function listaCard() {
    const listaApi = await conectaApi.listaCard();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.imagem, elemento.nome, elemento.valor)))
}

listaCard();