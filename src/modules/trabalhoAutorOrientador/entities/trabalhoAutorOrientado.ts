import { Entity, PrimaryColumn } from "typeorm";

@Entity("cria")
class TrabalhoAutorOrientado {
  @PrimaryColumn()
  autorid: number;

  @PrimaryColumn()
  trabalhoacademicoid: number;

  @PrimaryColumn()
  orientadorid: number;
}

export { TrabalhoAutorOrientado };
