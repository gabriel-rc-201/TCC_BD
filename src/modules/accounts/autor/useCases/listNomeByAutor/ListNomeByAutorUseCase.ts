import { inject, injectable } from "tsyringe";
import { NomeEmCitacaoBibliografica } from "../../entities/nomecitabiblio";
import { INomeEmCitacaoBibliograficaRepository } from "../../repositories/INomeEmCitacaoBibliograficaRepository";

@injectable()
class ListAllNomesByAutorUseCase {
  constructor(
    @inject("NomeEmCitacaoBibliografica")
    private repository: INomeEmCitacaoBibliograficaRepository
  ) {}

  async execute(autorid: number): Promise<NomeEmCitacaoBibliografica[]> {
    const nomes = await this.repository.findByAutorid(autorid);
    return nomes;
  }
}

export { ListAllNomesByAutorUseCase };
