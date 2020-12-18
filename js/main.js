'use strict'

const btnEditar = document.createElement("btn-editar");
const btnAgregar = document.createElement("btn-agregar");
const btnEliminar = document.createElement("btn-eliminar");


let createHeader = (claves) => {
    let theadEl = document.createElement("thead");
    let trEl = document.createElement("tr");
    for (let i = 0; i < claves.length; i++) {
        let thEl = document.createElement("th");
        thEl.innerHTML = claves[i];
        trEl.appendChild(thEl);
    }
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
    const thModificar = document.createElement("th")
    thModificar.innerHTML = 'Modificar'
    trEl.appendChild(thModificar);
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
};
let createRow = (datos) => {
    let trEl = document.createElement("tr");
    for (const clave in datos) {
        let tdEl = document.createElement("td");
        tdEl.innerHTML = datos[clave];
        trEl.appendChild(tdEl);
    }
    let tdEdit = document.createElement("td")
    const btnEditar = document.createElement("button");
    const textEditar = document.createTextNode("Editar");
    btnEditar.classList.add("btnmio");
    btnEditar.addEventListener("click", () => {
        showmodal();
    });
    btnEditar.appendChild(textEditar);
    tdEdit.appendChild(btnEditar);

    let tdElim = document.createElement("td")
    const btnEliminar = document.createElement("button");
    const textEliminar = document.createTextNode("Eliminar");
    btnEliminar.classList.add("btnelim");
    btnEliminar.addEventListener("click", () => {
        showmodal();
    });
    btnEliminar.appendChild(textEliminar);
    tdElim.appendChild(btnEliminar);
    trEl.appendChild(tdEdit);
    trEl.appendChild(tdElim);

    return trEl;
};

let createBody = (elementos) => {
    let tbodyEl = document.createElement("tbody");
    for (let i = 0; i < elementos.length; i++) {
        tbodyEl.appendChild(createRow(elementos[i]));
    }
    tableEl.appendChild(tbodyEl);
};

window.addEventListener("load", () => {
    createHeader(clavesSalidas);
    createBody(dataParseada.salidas);
});

let cerrar = document.querySelectorAll(".close")[0];
let modal = document.querySelectorAll(".mymodal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

cerrar.addEventListener("click", function () {
    modal.classList.toggle("mymodal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 900)
})

window.addEventListener("click", function (e) {
    if (e.target == modalC) {
        modal.classList.toggle("mymodal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 900)
    }
})

function showmodal() {
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("mymodal-close");
};