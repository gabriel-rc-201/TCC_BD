import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("nomecitabiblio")
class NomeEmCitacaoBibliografica {
  @PrimaryColumn()
  nome: string;

  @Column()
  autor_id: string;
}

export { NomeEmCitacaoBibliografica };
