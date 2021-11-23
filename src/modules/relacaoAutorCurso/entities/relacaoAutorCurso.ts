import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cursa")
class RelacaoAutorCurso {
  @Column()
  autorid: number;

  @Column()
  cursoid: number;

  @Column()
  campusid: number;

  @Column()
  universidadeid: number;

  @PrimaryColumn()
  @CreateDateColumn()
  datainicio: Date;

  @Column()
  datafim: Date;
}

export { RelacaoAutorCurso };
