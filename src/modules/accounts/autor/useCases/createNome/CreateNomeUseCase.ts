import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { IAutoresRepository } from "../../repositories/IAutoresRepository";
import { INomeEmCitacaoBibliograficaRepository } from "../../repositories/INomeEmCitacaoBibliograficaRepository";

@injectable()
class CreateNomeUseCase {
  constructor(
    @inject("NomeEmCitacaoBibliografica")
    private nomeRepository: INomeEmCitacaoBibliograficaRepository,

    @inject("AutoresRepository")
    private autorRepository: IAutoresRepository
  ) {}

  async execute(nome: string, autor_id: string) {
    const autorExists = await this.autorRepository.findById(autor_id);

    if (!autorExists)
      throw new AppError(
        "é necessário um auutor para cirar um nome em citação bibliográfica"
      );

    const nomeExist = await this.nomeRepository.findByNome(nome);

    if (nomeExist) throw new AppError("esse nome já está registrado");

    await this.nomeRepository.create({ nome, autor_id });
  }
}

export { CreateNomeUseCase };
