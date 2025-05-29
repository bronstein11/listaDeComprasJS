import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    const itemDaLista = criarItemDaLista();
    if (itemDaLista) { // Só adiciona se não for undefined
        listaDeCompras.appendChild(itemDaLista);
    }
    verificarListaVazia(listaDeCompras);

});



verificarListaVazia(listaDeCompras);