import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cursa")
class RelacaoAutorCurso {
  @PrimaryColumn()
  autor_id: string;

  @PrimaryColumn()
  curso_id: string;

  @PrimaryColumn()
  campus_id: string;

  @PrimaryColumn()
  universidade_id: string;

  @CreateDateColumn()
  data_inicio: Date;

  @Column({ default: null })
  data_fim?: Date;
}

export { RelacaoAutorCurso };
