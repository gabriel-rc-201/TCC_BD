import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

enum Modalidade {
  lincenciatura = "licenciatura",
  bacharelado = "bacharelado",
  bachareladoLincenciatura = "bacharelado e licenciatura",
}

enum Turno {
  diurno = "diurno",
  noturno = "noturno",
  integral = "integral",
}
@Entity("curso")
class Curso {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column({ type: "enum", enum: Turno })
  turno: Turno;

  @Column({ type: "enum", enum: Modalidade })
  modalidade: Modalidade;

  @PrimaryColumn()
  campus_id: string;

  @PrimaryColumn()
  universidade_id: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { Curso, Turno, Modalidade };
