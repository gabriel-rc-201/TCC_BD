import { ITrabalhoAcademicoDTO } from "../dtos/ITrabalhoAcademicoDTO";
import { TrabalhosAcademicos } from "../entities/trabalhosAcademicos";

interface ITrabalhoAcademicoRepository {
  create({
    id,
    titulo,
    tipo,
    nivel,
    local_arquivo,
    local_publicacao,
    area_estudo_id,
  }: ITrabalhoAcademicoDTO): Promise<void>;

  listAll(): Promise<TrabalhosAcademicos[]>;
  listByArea(area_estudo_id: string): Promise<TrabalhosAcademicos[]>;
  findByTitulo(titulo: string): Promise<TrabalhosAcademicos>;
  findById(id: string): Promise<TrabalhosAcademicos>;
}

export { ITrabalhoAcademicoRepository };
