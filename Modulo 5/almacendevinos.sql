-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-11-2021 a las 18:07:14
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `almacendevinos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `img_id`, `cuerpo`) VALUES
(1, 'La estatizada IMPSA', 'La firma IMPSA evalúa perfiles de candidatos para ocupar el cargo de Gerente IT en Mendoza. La búsqueda también está abierta para otras provincias', NULL, 'IMPSA está en busca de personal altamente calificado con perfil tecnológico. La empresa recientemente estatizada abrió una búsqueda laboral de más de 50 puestos para distintos puntos del país, con asiento principalmente en Mendoza. Entre los cargos que se pretende renovar está el de gerente de Tecnología de Información.'),
(3, 'Ernesto Sanz no quiere a Milei', 'Para el sanrafaelino Ernesto Sanz el radicalismo tiene ahora más protagonismo en Juntos por el Cambio. Pidió no desechar la posibilidad del diálogo con el Gobierno', NULL, 'El dirigente radical mendocino Ernesto Sanz descartó la posibilidade de que el liberal de ultraderecha Javier Milei se sume a Juntos por el Cambio. El sanrafaelino consideró por otra parte que el rol de Mauricio Macri en las elecciones legislativas fue neutro, abogó por aceptar el diálogo con el Gobierno (\"siempre que haya propuestas razonables) y aseguró que hoy la UCR tiene más protagonismo en la coalición opositora.'),
(9, 'Prueba Imagen y modificar', 'Prueba Imagen y modificar', '[object Object]', 'Prueba Imagen y modificar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'nico2', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Laura', '1234'),
(3, 'juan', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'lucas', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
