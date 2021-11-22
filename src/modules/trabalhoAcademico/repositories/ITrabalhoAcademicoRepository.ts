import { ITrabalhoAcademicoDTO } from "../dtos/ITrabalhoAcademicoDTO";
import { TrabalhosAcademicos } from "../entities/trabalhosAcademicos";

interface ITrabalhoAcademicoRepository {
  create({
    id,
    titulo,
    tipo,
    nivel,
    localdoarquivo,
    localdepublicacao,
    areaestudoid,
  }: ITrabalhoAcademicoDTO): Promise<void>;

  listAll(): Promise<TrabalhosAcademicos[]>;
  listByArea(areaestudoid: string): Promise<TrabalhosAcademicos[]>;
  findByTitulo(titulo: string): Promise<TrabalhosAcademicos>;
  findById(id: number): Promise<TrabalhosAcademicos>;
  findMaxId(): Promise<number>;
}

export { ITrabalhoAcademicoRepository };
