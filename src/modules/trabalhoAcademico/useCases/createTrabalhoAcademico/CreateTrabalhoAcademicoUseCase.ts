import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAutoresRepository } from "../../../accounts/autor/repositories/IAutoresRepository";
import { IOrientadoresRepository } from "../../../accounts/orientador/repositories/IOrientadoresRepository";
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
  autor_id: string;
  orientador_id: string;
}

@injectable()
class CreateTrabalhoAcademicoUseCase {
  constructor(
    @inject("TrabalhoAcademico")
    private trabalhoRepository: ITrabalhoAcademicoRepository,

    @inject("AreasEstudoRepository")
    private areaRepository: IAreaEstudoRepository,

    @inject("OrientadoresRepository")
    private orientadorRepository: IOrientadoresRepository,

    @inject("AutoresRepository")
    private autorRepository: IAutoresRepository
  ) {}

  async execute({
    titulo,
    tipo,
    nivel,
    local_arquivo,
    local_publicacao,
    area_estudo_id,
    autor_id,
    orientador_id,
  }: IRequest) {
    const areaExists = await this.areaRepository.findById(area_estudo_id);
    if (!areaExists)
      throw new AppError(
        "Area de estudo não encontrada, verifica o códio da área de estudo",
        404
      );

    const autorExists = await this.autorRepository.findById(autor_id);
    if (!autorExists)
      throw new AppError(
        "Falha ao registrar o trabalho acadêmico, autor não encontrado",
        404
      );

    const orientadorExists = await this.orientadorRepository.findById(
      orientador_id
    );
    if (!orientadorExists)
      throw new AppError(
        "Falha ao registrar o trabalho acadêmico, orientador não encontrado",
        404
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
