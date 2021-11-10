import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Campus } from "./campus";

@Entity()
class Curso {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @Column()
  turno: string;

  @Column()
  modalidade: string;

  @JoinColumn()
  @ManyToOne(() => Campus)
  campusid: Number;

  @JoinColumn()
  @ManyToOne(() => Campus)
  universidadeid: Number;
}

export { Curso };
