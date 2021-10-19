import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("areaEstudo")
class AreaEstudo {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}

export { AreaEstudo };
