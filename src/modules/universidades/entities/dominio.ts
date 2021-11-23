import { Entity, PrimaryColumn } from "typeorm";
@Entity("dominio")
class Dominio {
  @PrimaryColumn()
  dominio: string;

  @PrimaryColumn()
  universidade_id: string;
}

export { Dominio };
