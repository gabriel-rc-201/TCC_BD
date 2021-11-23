import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("universidade")
class Universidade {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Universidade };
