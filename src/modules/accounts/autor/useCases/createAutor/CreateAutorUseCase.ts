import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { IAutoresRepository } from "../../repositories/IAutoresRepository";
import { AppError } from "../../../../../errors/AppErros";
import { ICursoRepository } from "../../../../universidades/repositories/ICursoRepository";
import { IDominioRepository } from "../../../../universidades/repositories/IDominiosRepository";

interface IRequest {
  email: string;
  nome: string;
  senha: string;
  matricula: string;
  curso_id: string;
  campus_id: string;
  universidade_id: string;
}

@injectable()
class CreateAutorUseCase {
  constructor(
    @inject("AutoresRepository")
    private autoresRepository: IAutoresRepository,

    @inject("CursosRepository")
    private cursoRepository: ICursoRepository,

    @inject("DominiosRepository")
    private dominioRepository: IDominioRepository
  ) {}

  async execute({
    email,
    nome,
    senha,
    matricula,
    curso_id,
    campus_id,
    universidade_id,
  }: IRequest): Promise<void> {
    const domain = email.split("@")[1];
    const dominioExists = await this.dominioRepository.findeByNome(domain);
    if (!dominioExists)
      throw new AppError(
        "Talvez o dominio do seu email não esteja cadastrado no nosso banco de dados,\n por favor use o seu email institucional,\nda sua instituição de ensino,\nou entre em contato conosco"
      );

    const cursoExists = await this.cursoRepository.findById(
      curso_id,
      campus_id,
      universidade_id
    );
    if (!cursoExists)
      throw new AppError(
        "Curso não encontrado, não foi possível registrar o autor"
      );

    const autorExists = await this.autoresRepository.findByMatricula(matricula);

    if (autorExists) {
      throw new AppError("Autor já Existe!!!!");
    }

    const senhaHash = await hash(senha, 8);

    await this.autoresRepository.create({
      email,
      nome,
      senha: senhaHash,
      matricula,
    });
  }
}

export { CreateAutorUseCase };
