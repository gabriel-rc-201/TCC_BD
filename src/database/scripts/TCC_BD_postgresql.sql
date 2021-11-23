-- Autor: Gabriel Ribeiro Camelo

-- CREATE schema tcc_bd;

-- set search_path to tcc_bd;

-- GRANT ALL ON SCHEMA tcc_bd TO postgres;
-- GRANT ALL ON SCHEMA tcc_bd TO tcc_bd;


CREATE TABLE area_estudo
  (
    id   VARCHAR NOT NULL ,
    nome VARCHAR NOT NULL
  ) ;
ALTER TABLE area_estudo ADD CONSTRAINT AreaEstudo_PK PRIMARY KEY ( id ) ;


CREATE TABLE autor
  (
    id        UUID NOT NULL ,
    nome      VARCHAR NOT NULL ,
    matricula VARCHAR NOT NULL ,
    senha     VARCHAR NOT NULL ,
    email     VARCHAR NOT NULL
  ) ;
ALTER TABLE autor ADD CONSTRAINT Autor_PK PRIMARY KEY ( id ) ;


CREATE TABLE campus
  (
    id              UUID NOT NULL ,
    nome            VARCHAR NOT NULL ,
    universidade_id UUID NOT NULL
  ) ;
ALTER TABLE campus ADD CONSTRAINT Campus_PK PRIMARY KEY ( id, universidade_id ) ;


CREATE TABLE cria
  (
    autor_id              UUID NOT NULL ,
    trabalho_academico_id UUID NOT NULL ,
    orientador_id         UUID NOT NULL
  ) ;
ALTER TABLE cria ADD CONSTRAINT Cria_PK PRIMARY KEY ( autor_id, trabalho_academico_id, orientador_id ) ;


CREATE TABLE cursa
  (
    autor_id         UUID NOT NULL ,
    curso_id         UUID NOT NULL ,
    campus_id        UUID NOT NULL ,
    universidade_id  UUID NOT NULL ,
    data_inicio      DATE NOT NULL ,
    data_fim         DATE
  ) ;
ALTER TABLE cursa ADD CONSTRAINT cursa_PK PRIMARY KEY ( autor_id, curso_id, campus_id, universidade_id ) ;

create type turno as ENUM ('diurno', 'noturno', 'integral');

create type modalidade as ENUM ('licenciatura', 'bacharelado', 'bacharelado e licenciatura');

CREATE TABLE curso
  (
    id              UUID NOT NULL ,
    nome            VARCHAR NOT NULL ,
    campus_id       UUID NOT NULL ,
    universidade_id UUID NOT NULL ,
    turno           turno,
    modalidade      modalidade
  ) ;
ALTER TABLE curso ADD CONSTRAINT Curso_PK PRIMARY KEY ( id, campus_id, universidade_id );


CREATE TABLE dominio
  (
    dominio         VARCHAR NOT NULL ,
    universidade_id UUID NOT NULL
  ) ;
ALTER TABLE dominio ADD CONSTRAINT Dominio_PK PRIMARY KEY (dominio, universidade_id);

CREATE TABLE nome_cita_biblio
  (
    autor_id UUID NOT NULL ,
    nome     VARCHAR NOT NULL
  ) ;
ALTER TABLE nome_cita_biblio ADD CONSTRAINT nome_cita_biblio_PK PRIMARY KEY ( autor_id, nome ) ;


CREATE TABLE orientacao
  (
    autor_id      UUID NOT NULL ,
    orientador_id UUID NOT NULL
  ) ;
ALTER TABLE orientacao ADD CONSTRAINT orientacao_PK PRIMARY KEY ( autor_id, orientador_id ) ;


CREATE TABLE orientador
  (
    id              UUID NOT NULL ,
    nome            VARCHAR NOT NULL ,
    senha           VARCHAR NOT NULL ,
    email           VARCHAR NOT NULL,
    matricula_siape VARCHAR NOT NULL
  ) ;
ALTER TABLE orientador ADD CONSTRAINT Orientador_PK PRIMARY KEY ( id ) ;

create type tipo as enum ('artigo', 'resenha', 'TCC');

create type nivel as enum ('graduação', 'mestradro', 'doutorado');

CREATE TABLE trabalho_academico
  (
    id                 UUID NOT NULL ,
    titulo             VARCHAR NOT NULL ,
    tipo               tipo,
    nivel              nivel,
    local_publicacao   VARCHAR ,
    local_arquivo      VARCHAR NOT NULL ,
    data_publicacao    DATE NOT NULL ,
    area_estudo_id     VARCHAR NOT NULL
  ) ;
ALTER TABLE trabalho_academico ADD CONSTRAINT trabalhoAcademico_PK PRIMARY KEY ( id ) ;


CREATE TABLE universidade
  (
    id   UUID NOT NULL ,
    nome VARCHAR NOT NULL ,
    CNPJ VARCHAR NOT NULL
  ) ;
ALTER TABLE universidade ADD CONSTRAINT Universidade_PK PRIMARY KEY ( id ) ;


ALTER TABLE campus ADD CONSTRAINT Campus_Universidade_FK FOREIGN KEY ( universidade_id ) REFERENCES universidade ( id ) ;

ALTER TABLE cria ADD CONSTRAINT Cria_Orientador_FK FOREIGN KEY ( orientador_id ) REFERENCES orientador ( id ) ;

ALTER TABLE curso ADD CONSTRAINT Curso_Campus_FK FOREIGN KEY ( campus_id, universidade_id ) REFERENCES campus ( id, universidade_id ) ;

ALTER TABLE dominio ADD CONSTRAINT Dominio_Universidade_FK FOREIGN KEY ( universidade_id ) REFERENCES universidade ( id ) ;

ALTER TABLE cria ADD CONSTRAINT FK_ASS_49 FOREIGN KEY ( autor_id ) REFERENCES autor ( id ) ;

ALTER TABLE cria ADD CONSTRAINT FK_ASS_50 FOREIGN KEY ( trabalho_academico_id ) REFERENCES trabalho_academico ( id ) ;

ALTER TABLE cursa ADD CONSTRAINT FK_ASS_53 FOREIGN KEY ( autor_id ) REFERENCES autor ( id ) ;

ALTER TABLE cursa ADD CONSTRAINT FK_ASS_54 FOREIGN KEY ( curso_id, campus_id, universidade_id ) REFERENCES curso ( id, campus_id, universidade_id ) ;

ALTER TABLE orientacao ADD CONSTRAINT FK_ASS_58 FOREIGN KEY ( autor_id ) REFERENCES autor ( id ) ;

ALTER TABLE orientacao ADD CONSTRAINT FK_ASS_59 FOREIGN KEY ( orientador_id ) REFERENCES orientador ( id ) ;

ALTER TABLE nome_cita_biblio ADD CONSTRAINT nomeCitaBiblio_Autor_FK FOREIGN KEY ( autor_id ) REFERENCES autor ( id ) ;

ALTER TABLE trabalho_academico ADD CONSTRAINT trabalhoAcademico_AreaEst_FK FOREIGN KEY ( area_estudo_id ) REFERENCES area_estudo ( id ) ;


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
