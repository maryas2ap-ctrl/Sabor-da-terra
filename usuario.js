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