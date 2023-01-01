
const listaSelecaoPaginas = document.querySelectorAll(".pagina-menu")

listaSelecaoPaginas.forEach(pagina => {

    pagina.addEventListener("click", () => {

        const paginaAberta = document.querySelector(".exibir")
        paginaAberta.classList.remove("exibir")

        const idMenuSelecionado = pagina.attributes.id.value
        const idPaginaParaAbrir = "pagina-"+idMenuSelecionado
        const paginaParaAbrir = document.getElementById(idPaginaParaAbrir)
        paginaParaAbrir.classList.add("exibir")

        
        const paginaAtivaNaListagem = document.querySelector(".ativo")
        paginaAtivaNaListagem.classList.remove("ativo")

        const paginaSelecionadaNaListagem = document.getElementById(idMenuSelecionado)
        paginaSelecionadaNaListagem.classList.add("ativo")
        
        
    })

})


const listaBotoes = document.querySelectorAll(".botao")

listaBotoes.forEach(botao => {

    botao.addEventListener("click", () => {

       
        const paginaAberta = document.querySelector(".exibir")
        paginaAberta.classList.remove("exibir")

        const nomeBotao = botao.attributes.name.value
        const idPaginaParaAbrir = "pagina-"+nomeBotao
        const paginaParaAbrir = document.getElementById(idPaginaParaAbrir)
        paginaParaAbrir.classList.add("exibir")

        
        const paginaAtivaNaListagem = document.querySelector(".ativo")
        paginaAtivaNaListagem.classList.remove("ativo")

        const paginaSelecionadaNaListagem = document.getElementById(nomeBotao)
        paginaSelecionadaNaListagem.classList.add("ativo")
        
        
    })

})