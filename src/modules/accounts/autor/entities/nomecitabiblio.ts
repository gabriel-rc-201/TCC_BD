import { Entity, PrimaryColumn } from "typeorm";

@Entity("nomecitabiblio")
class NomeEmCitacaoBibliografica {
  @PrimaryColumn()
  nome: string;

  @PrimaryColumn()
  autor_id: string;
}

export { NomeEmCitacaoBibliografica };
