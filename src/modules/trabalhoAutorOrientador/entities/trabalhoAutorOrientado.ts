import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("cria")
class TrabalhoAutorOrientado {
  @Column()
  autor_id: number;

  @PrimaryColumn()
  trabalhoacademicoid: number;

  @Column()
  orientadorid: number;
}

export { TrabalhoAutorOrientado };
