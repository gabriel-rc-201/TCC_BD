import { Entity, PrimaryColumn } from "typeorm";

@Entity("orientacao")
class RelacaoAutorOrientador {
  @PrimaryColumn()
  autor_id: string;

  @PrimaryColumn()
  orientador_id: string;
}

export { RelacaoAutorOrientador };
