document.addEventListener("DOMContentLoaded", () => {
    newGame();
});

const shapes = ["band", "pil", "ruit"];
const colors = ["blauw", "geel", "groen"];
const fillings = ["rand", "streep", "vol"];
const amounts = [1, 2, 3];
let addCardsCount = 0;
const MAX_ADD_CARDS = 2;


const MAX_SELECT = 3;
let selectedCards = [];
let deck = [];
let myscore = 100;

function newGame() {
    const buttons = document.querySelectorAll("#mainCards button");
    const extraButtons = document.querySelectorAll(".extra");
    const extraContainer = document.querySelector(".extra_cards_container");

    selectedCards = [];
    deck = createDeck();
    shuffle(deck);

    myscore = 100;
    updateScore();

    buttons.forEach(button => {
        button.classList.remove("selected");
        dealCard(button);
    });

    extraButtons.forEach(button => {
        button.innerHTML = "";
        button.removeAttribute("data-shape");
        button.removeAttribute("data-color");
        button.removeAttribute("data-filling");
        button.removeAttribute("data-amount");
        button.onclick = null;
        button.classList.remove("selected");
    });

    extraContainer.style.display = "none";
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
        myscore += 20;
    } else {
        alert("❌ FOUT! Dit is geen SET.");
        selectedCards.forEach(button => button.classList.remove("selected"));
        myscore -= 10;
    }

    selectedCards = [];
    updateScore();
}

function updateScore() {
    const scoreElement = document.getElementById("scoreArea");
    if (scoreElement) {
        scoreElement.textContent = "Score: " + myscore;
    }
}

function addCards() {
    if (addCardsCount >= MAX_ADD_CARDS) {
        alert("Je mag maximaal 2 keer extra kaarten toevoegen!");
        return;
    }

    const cardRow = document.querySelector("#mainCards .card_rows");

    for (let i = 0; i < 3; i++) {
        if (deck.length === 0) return;

        const button = document.createElement("button");
        dealCard(button);
        cardRow.appendChild(button);
    }

    addCardsCount++;

    myscore -= 5;
    updateScore();
}
function findSet() {
    const cards = Array.from(document.querySelectorAll("#mainCards button"));

    // Reset bestaande selectie
    selectedCards.forEach(card => card.classList.remove("selected"));
    selectedCards = [];

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                const trio = [cards[i], cards[j], cards[k]];

                if (isSet(trio)) {
                    trio.forEach(card => {
                        card.classList.add("selected");
                        selectedCards.push(card);
                    });

                    myscore -= 30;
                    updateScore();
                    return;
                }
            }
        }
    }

    alert("Geen SET gevonden op het bord.");
}
function isSet(cards) {
    const properties = ["shape", "color", "filling", "amount"];
    return properties.every(prop => {
        const values = cards.map(card => card.dataset[prop]);
        const unique = new Set(values);
        return unique.size === 1 || unique.size === 3;
    });
}
