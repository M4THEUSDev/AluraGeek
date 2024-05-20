
export async function apagarCard(id) {

    const conexao = await fetch(`http://localhost:3000/cards/${id}`, {
        method: 'DELETE'
    });

    return conexao;
}