-- Gerado por Oracle SQL Developer Data Modeler 4.1.3.901
--   em:        2021-10-28 10:44:28 BRT
--   site:      Oracle Database 11g
--   tipo:      Oracle Database 11g




CREATE TABLE areaEstudo
  (
    id   VARCHAR2 (15 BYTE) NOT NULL ,
    nome VARCHAR2 (155 BYTE) NOT NULL
  ) ;
ALTER TABLE areaEstudo ADD CONSTRAINT AreaEstudo_PK PRIMARY KEY ( id ) ;


CREATE TABLE autor
  (
    id        INTEGER NOT NULL ,
    nome      VARCHAR2 (50 BYTE) NOT NULL ,
    matricula VARCHAR2 (10 BYTE) NOT NULL ,
    senha     VARCHAR2 (30 BYTE) NOT NULL ,
    email     VARCHAR2 (60 BYTE) NOT NULL
  ) ;
ALTER TABLE autor ADD CONSTRAINT Autor_PK PRIMARY KEY ( id ) ;


CREATE TABLE campus
  (
    id             INTEGER NOT NULL ,
    nome           VARCHAR2 (45) NOT NULL ,
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


CREATE TABLE curso
  (
    id             INTEGER NOT NULL ,
    nome           VARCHAR2 (255 BYTE) NOT NULL ,
    campusId       INTEGER NOT NULL ,
    universidadeId INTEGER NOT NULL ,
    turno          VARCHAR2 (30 BYTE) CHECK(turno IN ('diurno', 'noturno', 'integral')),
    modalidade     VARCHAR2 (20 BYTE) CHECK(modalidade IN ('licenciatura', 'bacharelado', 'bacharelado e licenciatura'))
  ) ;
ALTER TABLE curso ADD CONSTRAINT Curso_PK PRIMARY KEY ( id, campusId, universidadeId );


CREATE TABLE dominio
  (
    doninio        VARCHAR2 (50 BYTE) NOT NULL ,
    universidadeId INTEGER NOT NULL
  ) ;


CREATE TABLE nomeCitaBiblio
  (
    autorId INTEGER NOT NULL ,
    nome    VARCHAR2 (45 BYTE) NOT NULL
  ) ;
ALTER TABLE nomeCitaBiblio ADD CONSTRAINT nomeCitaBiblio_PK PRIMARY KEY ( autorId ) ;


CREATE TABLE orientacao
  (
    autorId      INTEGER NOT NULL ,
    orientadorId INTEGER NOT NULL
  ) ;
ALTER TABLE orientacao ADD CONSTRAINT orientacao_PK PRIMARY KEY ( autorId, orientadorId ) ;


CREATE TABLE orientador
  (
    id              INTEGER NOT NULL ,
    nome            VARCHAR2 (50) NOT NULL ,
    senha           VARCHAR2 (20 BYTE) NOT NULL ,
    email           VARCHAR2 (60 BYTE) NOT NULL ,
    matricula_siape VARCHAR2 (15 BYTE) NOT NULL
  ) ;
ALTER TABLE orientador ADD CONSTRAINT Orientador_PK PRIMARY KEY ( id ) ;


CREATE TABLE trabalhoAcademico
  (
    id                INTEGER NOT NULL ,
    titulo            VARCHAR2 (100 BYTE) NOT NULL ,
    tipo              VARCHAR2 (10 BYTE) NOT NULL CHECK(tipo IN ('artigo', 'resenha', 'TCC')),
    nivel             VARCHAR2 (40 BYTE) NOT NULL CHECK(nivel IN ('graduação', 'mestradro', 'doutorado')),
    localDePublicacao VARCHAR2 (100 BYTE) ,
    localDoArquivo    VARCHAR2 (120 BYTE) NOT NULL ,
    dataDePublicacao  DATE NOT NULL ,
    areaEstudoId      VARCHAR2 (15 BYTE) NOT NULL
  ) ;
ALTER TABLE trabalhoAcademico ADD CONSTRAINT trabalhoAcademico_PK PRIMARY KEY ( id ) ;


CREATE TABLE universidade
  (
    id   INTEGER NOT NULL ,
    nome VARCHAR2 (100 BYTE) NOT NULL ,
    CNPJ VARCHAR2 (20 BYTE) NOT NULL
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
