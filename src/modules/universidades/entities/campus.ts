import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Universidade } from "./universidades";

@Entity("campus")
class Campus {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @Column()
  universidadeid: Number;
}

export { Campus };
