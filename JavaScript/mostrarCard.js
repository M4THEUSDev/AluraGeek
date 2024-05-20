import { apagarCard } from "./apagarCard.js";
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

    const apagar = card.querySelector('.fa-regular')
    apagar.addEventListener('click', async() => {
        const id = card.getAttribute('[data-lista]')
        card.remove()
        await apagarCard(id)
    })

    return card;
}


async function listaCard() {
    // TRY QUER DIZER "TENTE", ELE VAI TENTAR IMPPRIMIR NA TELA SE NÃO ELE MANDARÁ PARA O CATCH 
    // ONDE INFORMARÁ UM POSSÍVEL ERRO 
    try {
    const listaApi = await conectaApi.listaCard();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.imagem, elemento.nome, elemento.valor)))
    } catch{   
        lista.innerHTML = `<h1 class="mensagem__titulo"> Não foi possível carregar a lista de cards</h1>`
    }    
}

listaCard();