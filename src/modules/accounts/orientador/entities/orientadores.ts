import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("orientador")
class Orientadores {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  matricula_siape: string;
}

export { Orientadores };
