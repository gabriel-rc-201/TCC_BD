import { Entity, PrimaryColumn } from "typeorm";

@Entity("nome_cita_biblio")
class NomeEmCitacaoBibliografica {
  @PrimaryColumn()
  nome: string;

  @PrimaryColumn()
  autor_id: string;
}

export { NomeEmCitacaoBibliografica };
