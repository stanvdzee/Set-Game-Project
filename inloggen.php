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

    $sql = "SELECT * FROM inloggen WHERE naam = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $naam);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        if (password_verify($wachtwoord, $user['wachtwoord'])) {
            $_SESSION['speler_id'] = $user['id'];
            $_SESSION['naam'] = $user['naam'];

            header("Location: index.php");
            exit;
        } else {
            $melding = "Wachtwoord klopt niet";
        }
    } else {
        $melding = "Gebruiker bestaat niet";
    }
}
?>
<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inloggen</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>

    <h1>Inloggen</h1>

    <?php if ($melding != ""): ?>
    <p style="color:red;"><?= $melding ?></p>
    <?php endif; ?>

    <form method="POST">
        <label>Naam:</label><br>
        <input type="text" name="naam" required><br><br>

        <label>Wachtwoord:</label><br>
        <input type="password" name="wachtwoord" required><br><br>

        <button type="submit">Inloggen</button>
    </form>

    <a href="registreren.php">Heb je nog geen account?</a><br>
    <a href="index.php">Terug naar main pagina</a>

</body>

</html>