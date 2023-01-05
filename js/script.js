
function loadLegend(idTable){
    const id = document.querySelector("#" + idTable);
    const spot1 = document.querySelector("#legend1");
    const spot2 = document.querySelector("#legend2");
    for(let i = 1; i < id.children.length; i++){
        const lasttd = id.children[i].children[id.children[i].children.length - 1];
        const penultimatetd = id.children[i].children[id.children[i].children.length - 2];
        const leg1 = document.createElement("div");
        const leg2 = document.createElement("div");
        leg1.textContent = penultimatetd.textContent;
        leg2.textContent = lasttd.textContent;
        spot1.insertAdjacentElement("beforeend", leg1);
        spot2.insertAdjacentElement("beforeend", leg2);
        penultimatetd.textContent="";
        lasttd.textContent="";
    }
}

const btns = document.querySelectorAll(".menu__btn");
btns.forEach(button => {
    button.addEventListener("click", e => {
        button.classList.add("menu__btn--active");
        const table = document.querySelector("#"+button.textContent);
        table.classList.remove("data-storage");
    })
    button.addEventListener("click", e =>{loadLegend(button.textContent + "Table")});
}); 
