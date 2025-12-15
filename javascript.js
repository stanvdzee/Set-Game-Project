class card{
    maxSelect = 3;
    selectedArr = [];
    isSelected = false();
}

function newGame(){
    alert("new game made");
}

function addCards(){
    alert("added cards");
}

function findSet(){
    alert("set Found");
}

function cardSelect(){

    if(onclick){
        isSelected = true;
        
    }
    if(maxSelect <= 3){
        alert("SET!");
    }
}