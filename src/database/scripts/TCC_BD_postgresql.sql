-- Autor: Gabriel Ribeiro Camelo

-- CREATE SCHEMA tcc_bd;

-- SET search_path TO tcc_bd;

-- GRANT ALL ON SCHEMA tcc_bd TO postgres;
-- GRANT ALL ON SCHEMA tcc_bd TO tcc_bd;


CREATE TABLE areaEstudo
  (
    id   VARCHAR NOT NULL ,
    nome VARCHAR NOT NULL
  ) ;
ALTER TABLE areaEstudo ADD CONSTRAINT AreaEstudo_PK PRIMARY KEY ( id ) ;


CREATE TABLE autor
  (
    id        INTEGER NOT NULL ,
    nome      VARCHAR NOT NULL ,
    matricula VARCHAR NOT NULL ,
    senha     VARCHAR NOT NULL ,
    email     VARCHAR NOT NULL
  ) ;
ALTER TABLE autor ADD CONSTRAINT Autor_PK PRIMARY KEY ( id ) ;


CREATE TABLE campus
  (
    id             INTEGER NOT NULL ,
    nome           VARCHAR NOT NULL ,
    universidadeId INTEGER NOT NULL
  ) ;
ALTER TABLE campus ADD CONSTRAINT Campus_PK PRIMARY KEY ( id, universidadeId ) ;


CREATE TABLE cria
  (
    autorId             INTEGER NOT NULL ,
    trabalhoAcademicoId INTEGER NOT NULL ,
    orientadorId        INTEGER NOT NULL
  ) ;
ALTER TABLE cria ADD CONSTRAINT Cria_PK PRIMARY KEY ( autorId, trabalhoAcademicoId, orientadorId ) ;


CREATE TABLE cursa
  (
    autorId        INTEGER NOT NULL ,
    cursoId        INTEGER NOT NULL ,
    campusId       INTEGER NOT NULL ,
    universidadeId INTEGER NOT NULL ,
    dataInicio     DATE NOT NULL ,
    dataFim        DATE
  ) ;
ALTER TABLE cursa ADD CONSTRAINT cursa_PK PRIMARY KEY ( autorId, cursoId, campusId, universidadeId ) ;

CREATE TYPE turno AS ENUM ('diurno', 'noturno', 'integral');

CREATE TYPE modalidade AS ENUM ('licenciatura', 'bacharelado', 'bacharelado e licenciatura');

CREATE TABLE curso
  (
    id             INTEGER NOT NULL ,
    nome           VARCHAR NOT NULL ,
    campusId       INTEGER NOT NULL ,
    universidadeId INTEGER NOT NULL ,
    turno          turno,
    modalidade     modalidade
  ) ;
ALTER TABLE curso ADD CONSTRAINT Curso_PK PRIMARY KEY ( id, campusId, universidadeId );


CREATE TABLE dominio
  (
    id             UUID NOT NULL,
    doninio        VARCHAR NOT NULL ,
    universidadeId INTEGER NOT NULL
  ) ;
ALTER TABLE dominio ADD CONSTRAINT dominio_PK PRIMARY KEY (id);


CREATE TABLE nomeCitaBiblio
  (
    id      UUID NOT NULL
    autorId INTEGER NOT NULL ,
    nome    VARCHAR NOT NULL
  ) ;
ALTER TABLE nomeCitaBiblio ADD CONSTRAINT nomeCitaBiblio_PK PRIMARY KEY ( id ) ;


CREATE TABLE orientacao
  (
    autorId      INTEGER NOT NULL ,
    orientadorId INTEGER NOT NULL
  ) ;
ALTER TABLE orientacao ADD CONSTRAINT orientacao_PK PRIMARY KEY ( autorId, orientadorId ) ;


CREATE TABLE orientador
  (
    id    INTEGER NOT NULL ,
    nome  VARCHAR NOT NULL ,
    senha VARCHAR NOT NULL ,
    email VARCHAR NOT NULL ,
    matricula_siape VARCHAR NOT NULL
  ) ;
ALTER TABLE orientador ADD CONSTRAINT Orientador_PK PRIMARY KEY ( id ) ;

CREATE TYPE tipo AS enum ('artigo', 'resenha', 'TCC');

CREATE TYPE nivel AS enum ('graduação', 'mestradro', 'doutorado');

CREATE TABLE trabalhoAcademico
  (
    id                INTEGER NOT NULL ,
    titulo            VARCHAR NOT NULL ,
    tipo              tipo,
    nivel             nivel,
    localDePublicacao VARCHAR ,
    localDoArquivo    VARCHAR NOT NULL ,
    dataDePublicacao  DATE NOT NULL ,
    areaEstudoId      VARCHAR NOT NULL
  ) ;
ALTER TABLE trabalhoAcademico ADD CONSTRAINT trabalhoAcademico_PK PRIMARY KEY ( id ) ;


CREATE TABLE universidade
  (
    id   INTEGER NOT NULL ,
    nome VARCHAR NOT NULL ,
    CNPJ VARCHAR NOT NULL
  ) ;
ALTER TABLE universidade ADD CONSTRAINT Universidade_PK PRIMARY KEY ( id ) ;


ALTER TABLE campus ADD CONSTRAINT Campus_Universidade_FK FOREIGN KEY ( universidadeId ) REFERENCES universidade ( id ) ;

ALTER TABLE cria ADD CONSTRAINT Cria_Orientador_FK FOREIGN KEY ( orientadorId ) REFERENCES orientador ( id ) ;

ALTER TABLE curso ADD CONSTRAINT Curso_Campus_FK FOREIGN KEY ( campusId, universidadeId ) REFERENCES campus ( id, universidadeId ) ;

ALTER TABLE dominio ADD CONSTRAINT Dominio_Universidade_FK FOREIGN KEY ( universidadeId ) REFERENCES universidade ( id ) ;

ALTER TABLE cria ADD CONSTRAINT FK_ASS_49 FOREIGN KEY ( autorId ) REFERENCES autor ( id ) ;

ALTER TABLE cria ADD CONSTRAINT FK_ASS_50 FOREIGN KEY ( trabalhoAcademicoId ) REFERENCES trabalhoAcademico ( id ) ;

ALTER TABLE cursa ADD CONSTRAINT FK_ASS_53 FOREIGN KEY ( autorId ) REFERENCES autor ( id ) ;

ALTER TABLE cursa ADD CONSTRAINT FK_ASS_54 FOREIGN KEY ( cursoId, campusId, universidadeId ) REFERENCES curso ( id, campusId, universidadeId ) ;

ALTER TABLE orientacao ADD CONSTRAINT FK_ASS_58 FOREIGN KEY ( autorId ) REFERENCES autor ( id ) ;

ALTER TABLE orientacao ADD CONSTRAINT FK_ASS_59 FOREIGN KEY ( orientadorId ) REFERENCES orientador ( id ) ;

ALTER TABLE nomeCitaBiblio ADD CONSTRAINT nomeCitaBiblio_Autor_FK FOREIGN KEY ( autorId ) REFERENCES autor ( id ) ;

ALTER TABLE trabalhoAcademico ADD CONSTRAINT trabalhoAcademico_AreaEst_FK FOREIGN KEY ( areaEstudoId ) REFERENCES areaEstudo ( id ) ;


-- Relatório do Resumo do Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                            12
-- CREATE INDEX                             0
-- ALTER TABLE                             23
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
