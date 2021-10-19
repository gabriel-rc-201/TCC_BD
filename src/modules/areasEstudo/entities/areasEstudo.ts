import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("areaEstudo")
class Areaestudo {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}

export { Areaestudo };
