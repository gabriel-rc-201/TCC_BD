import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("autor")
class Autores {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Autores };
