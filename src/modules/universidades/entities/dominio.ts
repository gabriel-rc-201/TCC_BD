import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Universidade } from "./universidades";

@Entity()
class Dominio {
  @Column()
  dominio: string;

  @JoinColumn()
  @ManyToOne(() => Universidade)
  universidadeid: Number;
}

export { Dominio };
