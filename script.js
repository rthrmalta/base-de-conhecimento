










let cardcontainer = document.querySelector(".card-container");





const searchInput = document.getElementById('search-input');





const searchButton = document.getElementById('botao-busca');











let dados = [];











async function busca() {





    try {





        let resposta = await fetch("data.json");





        dados = await resposta.json();





        renderizarCards(dados);





    } catch (error) {





        console.error('Erro ao buscar dados:', error);





    }





}











function renderizarCards(cards) {





    cardcontainer.innerHTML = "";





    if (cards.length === 0) {





        cardcontainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";





        return;





    }





    for (let card of cards) {





        let article = document.createElement("article");





        article.classList.add("card");





        article.innerHTML = `<h2>${card.nome}</h2>





                             <p>${card.ano}</p>





                             <p>${card.descrição}</p>





                             <a href="${card.link}" target='_blank'>saiba mais</a>`;





        cardcontainer.appendChild(article);





    }





}











function filtrarDados() {





    const termoBusca = searchInput.value.toLowerCase();





    const dadosFiltrados = dados.filter(card => {





        return card.nome.toLowerCase().includes(termoBusca) ||





               card.descrição.toLowerCase().includes(termoBusca);





    });





    renderizarCards(dadosFiltrados);





}











searchInput.addEventListener('input', filtrarDados);





searchButton.addEventListener('click', (event) => {





    event.preventDefault(); // Previne o comportamento padrão do botão, caso esteja em um formulário





    filtrarDados();





});











busca();






