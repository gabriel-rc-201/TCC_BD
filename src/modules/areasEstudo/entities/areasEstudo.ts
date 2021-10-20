import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("areaestudo")
class AreaEstudo {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;
}

export { AreaEstudo };
