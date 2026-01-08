-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 08 jan 2026 om 12:47
-- Serverversie: 8.4.5
-- PHP-versie: 8.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `set`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `highscores`
--

DROP TABLE IF EXISTS `highscores`;
CREATE TABLE `highscores` (
  `score` int NOT NULL,
  `id` int NOT NULL,
  `speler_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Gegevens worden geëxporteerd voor tabel `highscores`
--

INSERT INTO `highscores` (`score`, `id`, `speler_id`) VALUES
(500000000, 1, 1),
(67, 2, 2),
(123, 6, 5),
(123, 7, 5),
(100, 8, 5),
(-170, 9, 5);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `highscores`
--
ALTER TABLE `highscores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `speler_id` (`speler_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `highscores`
--
ALTER TABLE `highscores`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
