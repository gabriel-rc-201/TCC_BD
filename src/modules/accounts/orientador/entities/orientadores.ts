import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("orientador")
class Orientadores {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  matricula_siape: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Orientadores };
