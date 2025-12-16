document.addEventListener("DOMContentLoaded", () => {
    newGame();
});

const shapes = ["band", "pil", "ruit"];
const colors = ["blauw", "geel", "groen"];
const fillings = ["rand", "streep", "vol"];
const amounts = [1, 2, 3];

const MAX_SELECT = 3;
let selectedCards = [];
let deck = [];
let myscore = 100;

function newGame() {
    const buttons = document.querySelectorAll(".card_rows button");

    selectedCards = [];
    deck = createDeck();
    shuffle(deck);

    buttons.forEach(button => {
        button.classList.remove("selected");
        dealCard(button);
    });

    myscore = 100;
    updateScore();
}

function createDeck() {
    const newDeck = [];
    shapes.forEach(shape => {
        colors.forEach(color => {
            fillings.forEach(filling => {
                amounts.forEach(amount => {
                    newDeck.push({ shape, color, filling, amount });
                });
            });
        });
    });
    return newDeck;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function dealCard(button) {


    const card = deck.pop();
    button.innerHTML = "";

    button.dataset.shape = card.shape;
    button.dataset.color = card.color;
    button.dataset.filling = card.filling;
    button.dataset.amount = String(card.amount);

    const wrapper = document.createElement("div");
    wrapper.classList.add("card-content");

    for (let i = 0; i < card.amount; i++) {
        const img = document.createElement("img");
        img.src = `/setkaarten/${card.shape}-${card.color}-${card.filling}.svg`;
        img.classList.add("card-svg");
        img.alt = `${card.shape} ${card.color} ${card.filling}`;
        wrapper.appendChild(img);
    }

    button.appendChild(wrapper);
    button.onclick = () => cardSelect(button);
}

function cardSelect(button) {
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        selectedCards = selectedCards.filter(b => b !== button);
        return;
    }

    if (selectedCards.length >= MAX_SELECT) {
        alert("Je mag maar 3 kaarten kiezen!");
        return;
    }

    button.classList.add("selected");
    selectedCards.push(button);

    if (selectedCards.length === MAX_SELECT) {
        checkSet();
    }
}

function checkSet() {
    const properties = ["shape", "color", "filling", "amount"];

    const isSet = properties.every(prop => {
        const values = selectedCards.map(card => card.dataset[prop]);
        const unique = new Set(values);
        return unique.size === 1 || unique.size === 3;
    });

    if (isSet) {
        alert("✅ GOED! Dit is een SET!");
        selectedCards.forEach(button => {
            button.classList.remove("selected");
            dealCard(button);
        });
    } else {
        alert("❌ FOUT! Dit is geen SET.");
        selectedCards.forEach(button => button.classList.remove("selected"));
    }

    selectedCards = [];

    if (isSet) {
        myscore += 20;
    } else {
        myscore -= 10;
    }

    updateScore();
}

function updateScore() {
    const scoreElement = document.getElementById("scoreArea");
    if (scoreElement) {
        scoreElement.textContent = "Score: " + myscore;
    }
}

function addCards() {
    alert("3 kaarten toevoegen komt later");
}

function findSet() {
    alert("Automatisch SET zoeken komt later");
}