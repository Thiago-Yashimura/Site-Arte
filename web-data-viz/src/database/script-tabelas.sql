-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto_desenho;
USE projeto_desenho;

CREATE TABLE usuario (
    id    INT PRIMARY KEY AUTO_INCREMENT,
    nome  VARCHAR(50)  NOT NULL,
    email VARCHAR(50)  NOT NULL UNIQUE, 
    senha VARCHAR(50)  NOT NULL
);

SELECT * FROM usuario;
