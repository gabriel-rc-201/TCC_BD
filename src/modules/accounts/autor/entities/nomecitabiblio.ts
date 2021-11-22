import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("nomecitabiblio")
class NomeEmCitacaoBibliografica {
  @PrimaryColumn()
  nome: string;

  @Column()
  autorid: number;
}

export { NomeEmCitacaoBibliografica };
