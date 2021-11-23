import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("campus")
class Campus {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  universidade_id: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Campus };
