document.addEventListener("DOMContentLoaded", function () {

    const categorias = document.querySelectorAll(".categoria");
    const produtos = document.querySelectorAll(".produto");
    const botoesCompra = document.querySelectorAll(".prdtbotao");

    botoesCompra.forEach(botao => {

        botao.addEventListener("click", () => {

            const produto = {
                nome: botao.dataset.nome,
                preco: Number(botao.dataset.preco),
                img: botao.dataset.img,
                quantidade: 1
            };

            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

            const existente = carrinho.find(item =>
                item.nome === produto.nome
            );

            if (existente) {

                existente.quantidade += 1;

            } else {

                carrinho.push(produto);
            }

            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            );

            window.location.href =
            "../pag_pagamento/pagamento.html";

        });

    });

    categorias.forEach(botao => {

        botao.addEventListener("click", () => {

            const ativado = document.querySelector(".categoria.ativo");

            if (ativado) {
                ativado.classList.remove("ativo");
            }

            botao.classList.add("ativo");

            const peneira = botao.getAttribute("data-filtro");

            produtos.forEach(produto => {

                const categoria = produto.getAttribute("data-categoria");

                if (peneira === "Todos" || peneira === categoria) {

                    produto.classList.remove("transparente");

                } else {

                    produto.classList.add("transparente");}});
        });
    });

});


// USUARIO BB
document.addEventListener("DOMContentLoaded", function () {

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    const textoUsuario = document.getElementById("textoUsuario");
    const btnSair = document.getElementById("btnSair");

    if (!textoUsuario || !btnSair) return;

    if (usuarioLogado) {

  textoUsuario.textContent = "Seja bem-vindo, " + usuarioLogado.nome;

        btnSair.style.display = "block";

        btnSair.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            localStorage.removeItem("usuarioLogado");

            window.location.reload();

        });

    }

});