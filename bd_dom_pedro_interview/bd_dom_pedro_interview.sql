-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Jul-2020 às 07:53
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_dom_pedro_interview`
--
CREATE DATABASE IF NOT EXISTS `bd_dom_pedro_interview` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_dom_pedro_interview`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `informacao`
--

DROP TABLE IF EXISTS `informacao`;
CREATE TABLE `informacao` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `createdAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `informacao`
--

INSERT INTO `informacao` (`id`, `name`, `email`, `createdAt`) VALUES
(1, 'Gustavo Oliveira', 'gustavoho8389@gmail.com', '28/7/2020 às 2:37:31'),
(2, 'Sara Aparecida Cristiano', 'saracris_11@hotmail.com', '28/7/2020 às 2:39:20'),
(3, 'Sophia Cristiano de Oliveira', 'sophia@gmail.com', '28/7/2020 às 2:40:40');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `informacao`
--
ALTER TABLE `informacao`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `informacao`
--
ALTER TABLE `informacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
