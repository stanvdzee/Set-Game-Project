<?php
$conn = new mysqli("localhost", "root", "ServBay.dev", "set");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT h.score, i.naam
        FROM highscores h
        JOIN inloggen i ON h.speler_id = i.id
        ORDER BY h.score DESC";

$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Highscores</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>

    <h1>Highscores</h1>

    <?php while ($row = $result->fetch_assoc()): ?>
        <p><?= htmlspecialchars($row['naam']) ?> — <?= $row['score'] ?></p>
    <?php endwhile; ?>

    <br>
    <a href="index.php">Terug naar main pagina</a>

</body>

</html>