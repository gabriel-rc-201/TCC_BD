import { Entity, PrimaryColumn } from "typeorm";

@Entity("cria")
class TrabalhoAutorOrientado {
  @PrimaryColumn()
  autor_id: string;

  @PrimaryColumn()
  trabalho_academico_id: string;

  @PrimaryColumn()
  orientador_id: string;
}

export { TrabalhoAutorOrientado };
