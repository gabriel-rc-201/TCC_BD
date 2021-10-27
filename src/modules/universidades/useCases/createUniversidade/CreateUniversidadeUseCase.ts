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
    const universidadeExists = await this.universidadeRepository.findByCnpj(
      cnpj
    );

    if (universidadeExists) {
      throw new Error("Universidade ja está registrada");
    }

    const id =
      parseInt((await this.universidadeRepository.findMaxId()).toString()) + 1;

    this.universidadeRepository.create({ id, nome, cnpj });
  }
}

export { CreateUniversidadeUseCase };
