import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Universidade } from "./universidades";

@Entity()
class Doninio {
  @Column()
  dominio: string;

  @JoinColumn()
  @ManyToOne(() => Universidade)
  universidadeid: Number;
}

export { Doninio };
