import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Universidade } from "./universidades";

@Entity("dominio")
class Dominio {
  @Column()
  doninio: string;

  @PrimaryColumn()
  // @JoinColumn()
  // @ManyToOne(() => Universidade)
  universidadeid: Number;
}

export { Dominio };
