import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { NomeEmCitacaoBibliografica } from "../../entities/nomecitabiblio";
import { IAutoresRepository } from "../../repositories/IAutoresRepository";
import { INomeEmCitacaoBibliograficaRepository } from "../../repositories/INomeEmCitacaoBibliograficaRepository";

@injectable()
class ListAllNomesByAutorUseCase {
  constructor(
    @inject("NomeEmCitacaoBibliografica")
    private repository: INomeEmCitacaoBibliograficaRepository,

    @inject("AutoresRepository")
    private autoresRepository: IAutoresRepository
  ) {}

  async execute(autor_id: string): Promise<NomeEmCitacaoBibliografica[]> {
    const autorExists = await this.autoresRepository.findById(autor_id);
    if (!autorExists) throw new AppError("autor não encontrado", 404);

    const nomes = await this.repository.findByAutorid(autor_id);
    return nomes;
  }
}

export { ListAllNomesByAutorUseCase };
