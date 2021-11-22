import { v4 as uuid } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity("dominio")
class Dominio {
  @PrimaryColumn()
  id?: string;

  @Column()
  doninio: string;

  @Column()
  universidadeid: Number;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Dominio };
