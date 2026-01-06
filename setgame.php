<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SET Spel</title>
    <link rel="stylesheet" href="style.css" />
    <script src="javascript.js" defer></script>
</head>

<body>
    <nav id="navbar">
        <a href="index.php">Terug naar menu</a>
        <a href="rules.php">Regels</a>
        <a href="highscores.php">Highscores</a>
    </nav>

    <h1 style="text-align: center;">Welkom bij het SET Spel</h1>

    <div class="container_field">
        <!-- Linker menu -->
        <div class="container1">
            <button class="button" onclick="newGame()">Nieuw spel</button>
            <button class="button" onclick="addCards()">Voeg 3 kaarten toe</button>
            <button class="button" onclick="findSet()">Vind set</button>
            <p id="scoreArea">Score: 100</p>
        </div>

        <!-- Midden: kaarten -->
        <div class="container2">
            <div class="card_zone">
                <div class="card_columns" id="mainCards">
                    <div class="card_rows">
                        <button id="1"></button>
                        <button id="2"></button>
                        <button id="3"></button>
                        <button id="4"></button>
                        <button id="5"></button>
                        <button id="6"></button>
                        <button id="7"></button>
                        <button id="8"></button>
                        <button id="9"></button>
                        <button id="10"></button>
                        <button id="11"></button>
                        <button id="12"></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
</body>

</html>