import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cursa")
class RelacaoAutorCurso {
  @Column()
  autor_id: number;

  @Column()
  cursoid: number;

  @Column()
  campus_id: number;

  @Column()
  universidade_id: number;

  @CreateDateColumn()
  datainicio: Date;

  @Column()
  datafim: Date;
}

export { RelacaoAutorCurso };
