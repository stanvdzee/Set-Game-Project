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

    // Reset selectie
    selectedCards = [];
    buttons.forEach(button => {
        button.classList.remove("selected");
        createCard(button);
    });
}

/* -------- KAART MAKEN -------- */
function createCard(button) {
    // Leeg de kaart
    button.innerHTML = "";

    // Willekeurige eigenschappen kiezen
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const filling = fillings[Math.floor(Math.random() * fillings.length)];
    const amount = Math.floor(Math.random() * 3) + 1; // 1, 2 of 3 symbolen

    // Wrapper voor de inhoud van de kaart
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-content");

    // Symbolen toevoegen (1 tot 3 stuks)
    for (let i = 0; i < amount; i++) {
        const img = document.createElement("img");
        img.src = `/setkaarten/${shape}-${color}-${filling}.svg`;
        img.alt = shape;
        img.classList.add("card-svg");
        img.classList.add(color);    // voor kleur (via CSS filter of SVG kleur)
        img.classList.add(filling);  // voor vulling: rand, streep, vol
        wrapper.appendChild(img);
    }

    // Wrapper in de button plaatsen
    button.appendChild(wrapper);

    // Klik-event instellen (overschrijft eventuele vorige)
    button.onclick = () => cardSelect(button);
}

/* -------- KAART SELECTEREN -------- */
function cardSelect(button) {
    // Als de kaart al geselecteerd is → deselecteren
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        selectedCards = selectedCards.filter(b => b !== button);
        return;
    }

    // Maximaal 3 kaarten mogen geselecteerd zijn
    if (selectedCards.length >= MAX_SELECT) {
        alert("Je mag maar 3 kaarten kiezen!");
        return;
    }

    // Selecteren
    button.classList.add("selected");
    selectedCards.push(button);

    // Als er precies 3 zijn geselecteerd
    if (selectedCards.length === MAX_SELECT) {
        alert("3 kaarten gekozen! Controleer straks of het een SET is.");
        // Hier kun je later de echte SET-checklogic toevoegen, bijv.:
        // checkIfSet();
    }
}

/* -------- EXTRA FUNCTIES (nog niet volledig) -------- */
function addCards() {
    alert("Functie om 3 nieuwe kaarten toe te voegen komt later.");
    // Later: maak 3 nieuwe buttons of vervang lege plekken
}

function findSet() {
    alert("Automatisch een SET zoeken komt later.");
    // Later: zoek door alle kaarten en highlight een geldige set
}