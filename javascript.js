document.addEventListener("DOMContentLoaded", () => {
    newGame();
});
const shapes = ["band", "pil", "ruit"];
const colors = ["blauw", "geel", "groen"];
const fillings = ["rand", "streep", "vol"];

let selectedCards = [];
const MAX_SELECT = 3;

/* -------- NIEUW SPEL -------- */
function newGame() {
    const buttons = document.querySelectorAll(".card_rows button");

    selectedCards = [];

    buttons.forEach(button => {
        button.classList.remove("selected");
        createCard(button);
    });
}

/* -------- KAART MAKEN -------- */
function createCard(button) {
    button.innerHTML = "";
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)]; // blauw, geel, groen
    const filling = fillings[Math.floor(Math.random() * fillings.length)]; // rand, streep, vol
    const amount = Math.floor(Math.random() * 3) + 1;

    const wrapper = document.createElement("div");
    wrapper.classList.add("card-content");

    for (let i = 0; i < amount; i++) {
        const img = document.createElement("img");
        img.src = `/setkaarten/${shape}.svg`;
        img.alt = shape;
        img.classList.add("card-svg");
        img.classList.add(color);        // voor kleur
        img.classList.add(filling);      // voor vulling
        wrapper.appendChild(img);
    }
    button.appendChild(wrapper);

    button.onclick = () => cardSelect(button);
}

// klik handler
button.onclick = () => cardSelect(button);


/* -------- KAART SELECTEREN -------- */
function cardSelect(button) {

    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        selectedCards = selectedCards.filter(b => b !== button);
        return;
    }

    if (selectedCards.length >= MAX_SELECT) {
        alert("Je mag maar 3 kaarten kiezen");
        return;
    }

    button.classList.add("selected");
    selectedCards.push(button);

    if (selectedCards.length === MAX_SELECT) {
        alert("3 kaarten gekozen!");
        // hier komt later SET-check
        return
    }
}


function addCards() {
    alert("3 kaarten toegevoegd (nog niet geïmplementeerd)");
}

function findSet() {
    alert("SET zoeken (nog niet geïmplementeerd)");
}
