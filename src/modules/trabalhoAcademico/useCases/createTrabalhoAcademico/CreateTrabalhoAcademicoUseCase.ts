import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAreaEstudoRepository } from "../../../areasEstudo/repositories/IAreasEstudoRepository";
import { Nivel, Tipo } from "../../dtos/ITrabalhoAcademicoDTO";
import { ITrabalhoAcademicoRepository } from "../../repositories/ITrabalhoAcademicoRepository";

interface IRequest {
  titulo: string;
  tipo: Tipo;
  nivel: Nivel;
  local_publicacao: string;
  local_arquivo: string;
  area_estudo_id: string;
}

@injectable()
class CreateTrabalhoAcademicoUseCase {
  constructor(
    @inject("TrabalhoAcademico")
    private trabalhoRepository: ITrabalhoAcademicoRepository,

    @inject("AreasEstudoRepository")
    private areaRepository: IAreaEstudoRepository
  ) {}

  async execute({
    titulo,
    tipo,
    nivel,
    local_arquivo,
    local_publicacao,
    area_estudo_id,
  }: IRequest) {
    const areaExists = await this.areaRepository.findById(area_estudo_id);
    if (!areaExists)
      throw new AppError(
        "Area de estudo não encontrada, verifica o códio da área de estudo"
      );

    const trabalhoExists = await this.trabalhoRepository.findByTitulo(titulo);
    if (trabalhoExists)
      throw new AppError(
        "Trabalho ja está cadastrado, por fafor tente outro titulo"
      );

    await this.trabalhoRepository.create({
      area_estudo_id,
      local_publicacao,
      local_arquivo,
      nivel,
      tipo,
      titulo,
      data_publicacao: new Date(),
    });
  }
}

export { CreateTrabalhoAcademicoUseCase };
