import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Universidade } from "./universidades";

@Entity()
class Campus {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @JoinColumn()
  @ManyToOne(() => Universidade)
  universidadeid: Number;
}

export { Campus };
