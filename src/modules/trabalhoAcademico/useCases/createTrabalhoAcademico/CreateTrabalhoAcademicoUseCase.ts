import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAreaEstudoRepository } from "../../../areasEstudo/repositories/IAreasEstudoRepository";
import { ITrabalhoAcademicoRepository } from "../../repositories/ITrabalhoAcademicoRepository";

interface IRequest {
  titulo: string;
  tipo: "artigo" | "resenha" | "TCC";
  nivel: "graduação" | "mestradro" | "doutorado";
  localdepublicacao: string;
  localdoarquivo: string;
  areaestudoid: string;
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
    localdoarquivo,
    localdepublicacao,
    areaestudoid,
  }: IRequest) {
    const areaExists = await this.areaRepository.findById(areaestudoid);
    if (!areaExists)
      throw new AppError(
        "Area de estudo não encontrada, verifica o códio da área de estudo"
      );

    const trabalhoExists = await this.trabalhoRepository.findByTitulo(titulo);
    if (trabalhoExists)
      throw new AppError(
        "Trabalho ja está cadastrado, por fafor tente outro titulo"
      );

    const id = (await this.trabalhoRepository.findMaxId()) + 1;
    await this.trabalhoRepository.create({
      id,
      areaestudoid,
      localdepublicacao,
      localdoarquivo,
      nivel,
      tipo,
      titulo,
      data: new Date(),
    });
  }
}

export { CreateTrabalhoAcademicoUseCase };
