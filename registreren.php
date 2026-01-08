<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

$conn = new mysqli("localhost", "root", "ServBay.dev", "set");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$melding = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $naam = $_POST['naam'];
    $wachtwoord = $_POST['wachtwoord'];

    // Check of naam al bestaat
    $sql = "SELECT id FROM inloggen WHERE naam = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $naam);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $melding = "Deze gebruikersnaam bestaat al";
    } else {
        // Wachtwoord hashen
        $hashed = password_hash($wachtwoord, PASSWORD_DEFAULT);

        // Nieuwe gebruiker opslaan
        $sql = "INSERT INTO inloggen (naam, wachtwoord) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $naam, $hashed);

        if ($stmt->execute()) {

            // ID van nieuwe gebruiker ophalen
            $gebruiker_id = $conn->insert_id;

            // Highscore aanmaken met score 0
            $sql = "INSERT INTO highscores (speler_id, score) VALUES (?, 0)";
            $stmt2 = $conn->prepare($sql);
            $stmt2->bind_param("i", $gebruiker_id);
            $stmt2->execute();

            $melding = "Account succesvol aangemaakt! Je kunt nu inloggen.";
        } else {
            $melding = "Er ging iets mis bij het registreren.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registreren</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>

    <h1>Registreren</h1>

    <?php if ($melding != ""): ?>
        <p style="color:red;"><?= $melding ?></p>
    <?php endif; ?>

    <form method="POST">
        <label>Naam:</label><br>
        <input type="text" name="naam" required><br><br>

        <label>Wachtwoord:</label><br>
        <input type="password" name="wachtwoord" required><br><br>

        <button type="submit">Account aanmaken</button>
    </form>

    <br>
    <a href="inloggen.php">Al een account? Inloggen</a><br>
    <a href="index.php">Terug naar main pagina</a>

</body>

</html>