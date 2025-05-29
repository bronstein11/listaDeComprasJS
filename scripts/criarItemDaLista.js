import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;


export function criarItemDaLista() {

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeDoItem.style.textDecoration = "line-through";
        } else {
            nomeDoItem.style.textDecoration = "none";
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeDoItem);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData); 
    
    return itemDaLista;


}