import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAutoresRepository } from "../../../accounts/autor/repositories/IAutoresRepository";
import { IOrientadoresRepository } from "../../../accounts/orientador/repositories/IOrientadoresRepository";
import {
  IRelacaoAutorOrientadorDTO,
  IRelacaoAutorOrientadorRepository,
} from "../../repositories/IRelacaoAutorOrientador";

@injectable()
class CreateRelacaoAutorOrientadorUseCase {
  constructor(
    @inject("RelacaoAutorOrientador")
    private relacaoRepository: IRelacaoAutorOrientadorRepository,

    @inject("AutoresRepository")
    private autorRepository: IAutoresRepository,

    @inject("OrientadoresRepository")
    private orientadorRepository: IOrientadoresRepository
  ) {}

  async execute({
    autor_id,
    orientador_id,
  }: IRelacaoAutorOrientadorDTO): Promise<void> {
    const autorExists = await this.autorRepository.findById(autor_id);
    if (!autorExists)
      throw new AppError(
        "autor não encontrado, por favor registre-se ou loge-se novamente na plataforma"
      );

    const orientadorExists = await this.orientadorRepository.findById(
      orientador_id
    );
    if (!orientadorExists)
      throw new AppError(
        "orientador não encontrado, por favor cheque novamente"
      );

    await this.relacaoRepository.create({ autor_id, orientador_id });
  }
}

export { CreateRelacaoAutorOrientadorUseCase };
