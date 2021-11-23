import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Nivel, Tipo } from "../dtos/ITrabalhoAcademicoDTO";

@Entity("trabalhoacademico")
class TrabalhosAcademicos {
  @PrimaryColumn()
  id?: string;

  @Column()
  titulo: string;

  @Column({ type: "enum", enum: Tipo })
  tipo: Tipo;

  @Column({ type: "enum", enum: Nivel })
  nivel: Nivel;

  @Column()
  local_publicacao: string;

  @Column()
  local_arquivo: string;

  @CreateDateColumn()
  data_publicacao: Date;

  @Column()
  area_estudo_id: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { TrabalhosAcademicos };
