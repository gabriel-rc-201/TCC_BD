import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAutoresRepository } from "../../../accounts/autor/repositories/IAutoresRepository";
import { IOrientadoresRepository } from "../../../accounts/orientador/repositories/IOrientadoresRepository";
import { ITrabalhoAcademicoRepository } from "../../../trabalhoAcademico/repositories/ITrabalhoAcademicoRepository";
import { ITrabalhoAutorOrientadorRepository } from "../../repositories/ITrabalhoAutorOrientadorRepository";

@injectable()
class CreateRealacaoTrabalhoAutorOrientador {
  constructor(
    @inject("RelacaoTrabalhoAutorOrientador")
    private relacaoRepository: ITrabalhoAutorOrientadorRepository,

    @inject("TrabalhoAcademico")
    private trabalhoRepository: ITrabalhoAcademicoRepository,

    @inject("OrientadoresRepository")
    private orientadorRepository: IOrientadoresRepository,

    @inject("AutoresRepository")
    private autorRepository: IAutoresRepository
  ) {}

  async execute(
    autorid: number,
    trabalhoacademicoid: number,
    orientadorid: number
  ): Promise<void> {
    const trabalhoExists = await this.trabalhoRepository.findById(
      trabalhoacademicoid
    );
    if (!trabalhoExists)
      throw new AppError(
        "Falha ao registrar o trabalho acadêmico na relação, trabalho não encontrado"
      );

    const autorExists = await this.autorRepository.findById(autorid);
    if (!autorExists)
      throw new AppError(
        "Falha ao registrar o autor acadêmico na relação, autor não encontrado"
      );

    const orientadorExists = await this.orientadorRepository.findById(
      orientadorid
    );
    if (!orientadorExists)
      throw new AppError(
        "Falha ao registrar o orientador acadêmico na relação, autor não encontrado"
      );

    const relacaoExists = await this.relacaoRepository.find(
      trabalhoacademicoid
    );
    if (relacaoExists) {
      if (
        relacaoExists.autorid === autorid &&
        relacaoExists.orientadorid === orientadorid &&
        relacaoExists.trabalhoacademicoid === trabalhoacademicoid
      ) {
        throw new AppError("relação ja exist");
      }
    }

    await this.relacaoRepository.create(
      autorid,
      orientadorid,
      trabalhoacademicoid
    );
  }
}

export { CreateRealacaoTrabalhoAutorOrientador };
