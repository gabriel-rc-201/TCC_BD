import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("trabalhoacademico")
class TrabalhosAcademicos {
  @PrimaryColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  tipo: "artigo" | "resenha" | "TCC";

  @Column()
  nivel: "graduação" | "mestradro" | "doutorado";

  @Column()
  localdepublicacao: string;

  @Column()
  localdoarquivo: string;

  @CreateDateColumn()
  data: Date;

  @Column()
  areaestudoid: string;
}

export { TrabalhosAcademicos };
