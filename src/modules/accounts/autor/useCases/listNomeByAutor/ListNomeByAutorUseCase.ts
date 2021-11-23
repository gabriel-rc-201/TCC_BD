import { inject, injectable } from "tsyringe";
import { NomeEmCitacaoBibliografica } from "../../entities/nomecitabiblio";
import { INomeEmCitacaoBibliograficaRepository } from "../../repositories/INomeEmCitacaoBibliograficaRepository";

@injectable()
class ListAllNomesByAutorUseCase {
  constructor(
    @inject("NomeEmCitacaoBibliografica")
    private repository: INomeEmCitacaoBibliograficaRepository
  ) {}

  async execute(autor_id: string): Promise<NomeEmCitacaoBibliografica[]> {
    const nomes = await this.repository.findByAutorid(autor_id);
    return nomes;
  }
}

export { ListAllNomesByAutorUseCase };
