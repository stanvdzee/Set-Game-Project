<?php
$servername = "localhost";
$username = "root";
$password = "ServBay.dev";
$dbname = "set"; // hier kies je de database

// Maak verbinding
$conn = new mysqli($servername, $username, $password, $dbname);

// Check verbinding
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";

// Query uitvoeren
$sql = "SELECT * FROM highscores, namen";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "speler_id : " . $row["speler_id"] . "<br>";
        echo "score: " . $row["score"] . "<br>";
        echo "namen : " . $row["naam"] . "<br>";
    }
} else {
    echo "Geen spelers gevonden";
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SET</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>
    <a style="" href="index.php">terug naar main pagina</a>
</body>

</html>