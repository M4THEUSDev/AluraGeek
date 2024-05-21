async function listaCard() {
    const conexao = await fetch("http://localhost:3000/cards");
    const conexaoConvertida = await conexao.json();
    
    // Quando chamar a função conexaoConvertida, ela vai retornar a lista do db.json para onde for chamado.
    return conexaoConvertida;
}

async function criaCard(imagem, nome, valor){
    const conexao = await fetch("http://localhost:3000/cards",{
        method: "POST",
        headers: {
            // O content type serve para especificar que tipo de arquivo está sendo enviado ou recebido.
            "Content-type": "application/json"
        },
        
        body: JSON.stringify({
            // PARA ENVIAR UMA REQUISIÇÃO, PASSAMOS O STRINGFY POIS ELE TRANSFORMA EM UMA STRING TUDO O QUE ESTAMOS ENVIANDO 
            // DADOS QUE QUEREMOS CADASTRAR NESTA REQUISIÇÃO.
            imagem: imagem,
            nome: nome,
            valor: valor 
        })
    });
    
    // Exclamação significa, se a conexão for "DIFERENTE" de ok, faça isso: 
    // if(!conexao.ok) {
    //     throw new Error("Não foi possível enviar a imagem");
    // }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

export const conectaApi = {
    listaCard,
    criaCard
}