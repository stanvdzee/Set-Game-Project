<?php
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SET Spel</title>
    <link rel="stylesheet" href="/style.css">
    <script src="/javascript.js"></script>
</head>

<body>
    <nav id="navbar">

        <a href="index.php">terug naar menu</a>
        <a href="rules.php">Regels</a>

    </nav>
    <h1>Welkom bij het SET Spel</h1>
    <div class="container_field">
        <div class="container1" id="leftie">
            <button class="button" onclick="newGame()">nieuw Spel</button>
            <button class="button" onclick="addCards()">voeg 3 kaarten toe</button>
            <button class="button" onclick="findSet()">vind set</button>
            <p id="scoreArea">Score: 100</p>

        </div>

        <div class="container2" id="center">
            <div class="card_columns">
                <div class="card_rows">
                    <button id="1" onclick="cardSelect()">1</button>
                    <button id="2" onclick="cardSelect()">2</button>
                    <button id="3">3</button>
                </div>
                <div class="card_rows">
                    <button id="4">4</button>
                    <button id="5">5</button>
                    <button id="6">6</button>
                </div>
                <div class="card_rows">
                    <button id="7">7</button>
                    <button id="8">8</button>
                    <button id="9">9</button>
                </div>
                <div class="card_rows">
                    <button id="10">10</button>
                    <button id="11">11</button>
                    <button id="12">12</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>