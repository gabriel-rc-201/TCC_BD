import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Campus } from "./campus";

@Entity("curso")
class Curso {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @Column()
  turno: string;

  @Column()
  modalidade: string;

  @Column()
  campusid: Number;

  @Column()
  universidadeid: Number;
}

export { Curso };
