function loadLegend(idTable){
    const id = document.querySelector("#" + idTable);
    console.log(idTable);
    const spot1 = document.querySelector("#legend");
    const spot = document.createElement("div");
    spot.id = idTable + "legend";
    spot1.insertAdjacentElement("beforeend", spot);
    for(let i = 1; i < id.children.length; i++){
        const lasttd = id.children[i].children[id.children[i].children.length - 1];
        const penultimatetd = id.children[i].children[id.children[i].children.length - 2];
        const leg1 = document.createElement("div");
        const leg2 = document.createElement("div");
        leg1.textContent = penultimatetd.textContent;
        leg1.style.backgroundColor = penultimatetd.bgColor;
        leg2.textContent = lasttd.textContent;
        if(!(leg1.textContent + 1 == 1)){
            spot.insertAdjacentElement("beforeend", leg1);
            spot.insertAdjacentElement("beforeend", leg2);
        }
    }
}
function adjustTable(idTable){
    const id = document.querySelector("#" + idTable);
    const spot1 = document.querySelector("#legend");
    const spot = document.createElement("div");
    spot.id = idTable + "legend";
    spot1.insertAdjacentElement("beforeend", spot);
    for(let i = 1; i < id.children.length; i++){
        const lasttd = id.children[i].children[id.children[i].children.length - 1];
        const penultimatetd = id.children[i].children[id.children[i].children.length - 2];
        id.children[i].removeChild(penultimatetd);
        id.children[i].removeChild(lasttd);
    }
    //usuwanie 1. rzedu
    console.log(id.children[0]);
    id.removeChild(id.children[0]);
    //usuwanie 1. kolumny
    for(let i = 0; i < id.children.length; i++){
        if(i%8==0){
         id.children[i].removeChild(id.children[i].children[1])
        }
    } 
}
function loadTable(idTable, idSpot){
    loadLegend(idTable);
    const id = document.querySelector("#" + idTable);
    const spot = document.querySelector("." + idSpot);
    const divspot = document.createElement("div");
    divspot.id = idTable + "display";
    spot.insertAdjacentElement("beforeend", divspot);
    for(let i = 0; i < id.children.length; i++){
        for(let j = 0; j < id.children[i].children.length; j++){
            const div = document.createElement("div");
            div.style.backgroundColor = id.children[i].children[j].bgColor;
            if(i<=0||j<=0||i%8==0){
                div.textContent = id.children[i].children[j].textContent;
            }
            div.dataset.numer = `${i}-${j}`;
            divspot.insertAdjacentElement("beforeend", div);
        }
    }
}

const btns = document.querySelectorAll(".menu__btn");
btns.forEach(button => {
    button.addEventListener("click", e => {
        e.target.dataset.toggle == "on"
        if(e.target.dataset.toggle == "on"){
            e.target.classList.remove("menu__btn--active");
            const source = document.querySelector(".data__display");
            const display = document.querySelector("#"  + e.target.textContent + "display");
            source.removeChild(display);
            const spot = document.querySelector(".legend");
            const legend = document.querySelector("#"  + e.target.textContent + "legend");
            spot.removeChild(legend);
            e.target.dataset.toggle = "off";
        } else {
            e.target.classList.add("menu__btn--active");
            loadTable(e.target.textContent, "data__display")
            e.target.dataset.toggle = "on";
        };
    })
    button.addEventListener("click", prepare => {
        if(prepare.target.dataset.prepared != "true"){
            adjustTable(prepare.target.textContent);
        }
        prepare.target.dataset.prepared = "true";
    })
}); 
