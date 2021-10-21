import { inject, injectable } from "tsyringe";
import { IUniversidadeRepository } from "../../repositories/IUniversidadesRepository";

interface IRequest {
  nome: string;
  cnpj: string;
}

@injectable()
class CreateUniversidadeUseCase {
  constructor(
    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute({ nome, cnpj }: IRequest): Promise<void> {
    const universidadeExists = await this.universidadeRepository.findByNome(
      nome
    );

    if (universidadeExists) {
      throw new Error("Universidade ja está registrada");
    }

    this.universidadeRepository.create({ nome, cnpj });
  }
}

export { CreateUniversidadeUseCase };
