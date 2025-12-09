<?php
?>

<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SET</title>
    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9f9f9;
        }

        .button {
            color: orange;
            border: 2px solid orange;
            padding: 15px 30px;
            font-size: 18px;
            cursor: pointer;
            background-color: white;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .button:hover {
            background-color: orange;
            color: white;
        }
    </style>
</head>

<body>
    <button class="button" onclick="window.location.href='setgame.php';">
        hallo
    </button>
</body>

</html>