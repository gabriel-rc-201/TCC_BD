import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("autor")
class Autores {
  @PrimaryColumn()
  id: Number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column()
  senha: string;

  @Column()
  email: string;
}

export { Autores };
