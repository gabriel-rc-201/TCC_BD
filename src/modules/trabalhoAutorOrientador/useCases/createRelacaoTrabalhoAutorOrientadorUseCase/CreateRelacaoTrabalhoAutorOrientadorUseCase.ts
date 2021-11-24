import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAutoresRepository } from "../../../accounts/autor/repositories/IAutoresRepository";
import { IOrientadoresRepository } from "../../../accounts/orientador/repositories/IOrientadoresRepository";
import { ITrabalhoAcademicoRepository } from "../../../trabalhoAcademico/repositories/ITrabalhoAcademicoRepository";
import {
  IRelacao,
  ITrabalhoAutorOrientadorRepository,
} from "../../repositories/ITrabalhoAutorOrientadorRepository";

@injectable()
class CreateRealacaoTrabalhoAutorOrientador {
  constructor(
    @inject("RelacaoTrabalhoAutorOrientador")
    private relacaoRepository: ITrabalhoAutorOrientadorRepository,

    @inject("TrabalhoAcademico")
    private trabalhoRepository: ITrabalhoAcademicoRepository
  ) {}

  async execute({
    autor_id,
    orientador_id,
    trabalho_academico_id,
  }: IRelacao): Promise<void> {
    const trabalhoExists = await this.trabalhoRepository.findById(
      trabalho_academico_id
    );
    if (!trabalhoExists)
      throw new AppError(
        "Falha ao registrar o trabalho acadêmico na relação, trabalho não encontrado"
      );

    const relacaoExists = await this.relacaoRepository.find({
      trabalho_academico_id,
      autor_id,
      orientador_id,
    });
    if (relacaoExists) {
      if (
        relacaoExists.autor_id === autor_id &&
        relacaoExists.orientador_id === orientador_id &&
        relacaoExists.trabalho_academico_id === trabalho_academico_id
      ) {
        throw new AppError("relação ja existe!!!");
      }
    }

    await this.relacaoRepository.create({
      autor_id,
      orientador_id,
      trabalho_academico_id,
    });
  }
}

export { CreateRealacaoTrabalhoAutorOrientador };
