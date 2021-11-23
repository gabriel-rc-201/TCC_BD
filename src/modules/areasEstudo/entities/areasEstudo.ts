import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("area_estudo")
class AreaEstudo {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;
}

export { AreaEstudo };
