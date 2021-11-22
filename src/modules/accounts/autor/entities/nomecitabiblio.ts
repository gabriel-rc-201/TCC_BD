import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("nomecitabiblio")
class NomeEmCitacaoBibliografica {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  autorid: number;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { NomeEmCitacaoBibliografica };
