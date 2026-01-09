<?php
session_start();
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SET - Home</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>

    <header>
        <img id="home"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiffFdca1Za8b7mt2v7pkQdwVLPYoQl-3AZQ&s"
            alt="SET logo" width="300">
    </header>

    <nav id="navbar">
        <div class="ttu">
            <a href="setgame.php">Play Set</a>
            <a href="rules.php">Regels</a>
            <a href="highscores.php">Highscores</a>

            <?php if (isset($_SESSION['naam'])): ?>
                <span class="welkom">Ingelogd als: <strong><?= htmlspecialchars($_SESSION['naam']) ?></strong></span>
                <a class="logout" href="logout.php">Uitloggen</a>
            <?php else: ?>
                <a class="inloggen" href="inloggen.php">Inloggen</a>
                <a href="registreren.php">Registreren</a>
            <?php endif; ?>
        </div>
    </nav>
</body>

</html>