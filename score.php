<?php
session_start();

if (!isset($_SESSION['speler_id'])) {
    die("Je moet ingelogd zijn om een score op te slaan.");
}

$conn = new mysqli("localhost", "root", "ServBay.dev", "set");

if ($conn->connect_error) {
    die("Database fout: " . $conn->connect_error);
}

$speler_id = $_SESSION['speler_id'];
$score = isset($_POST['score']) ? intval($_POST['score']) : 0;

$sql = "INSERT INTO highscores (speler_id, score) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $speler_id, $score);
$stmt->execute();

echo "OK";