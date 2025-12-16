class card {
    maxSelect = 3;
    selectedArr = [];
    isSelected = false();

}


function newGame() {
    location.reload();

}

function addCards() {
    alert("3 cards added")
}

function findSet() {
    alert("set Found");

}

function cardSelect() {

    if (onclick) {
        isSelected = true;
        buttonClicked = document.getElementsByName(id)[0];

    }
    if (maxSelect <= 3) {
        alert("SET!");
    }
}
