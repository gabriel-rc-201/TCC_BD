import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("universidade")
class Universidade {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @Column()
  cnpj: string;
}

export { Universidade };
