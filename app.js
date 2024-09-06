function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (!campoPesquisa){
        section.innerHTML = "Nada foi encontrado."
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada resultado, formatando os dados do objeto
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.youtube} target="_blank">Canal do Youtube</a><br>
                <a href=${dado.spotify} target="_blank">Spotify</a><br>
                <a href=${dado.instagram} target="_blank">Instagram</a>
            </div>
            `;
        }        
    }

    if (!resultados){
        resultados = "Nada foi encontrado."
    }

    // Atribui o HTML gerado ao conteúdo da seção
    section.innerHTML = resultados;
}