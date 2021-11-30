import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { Modalidade, Turno } from "../../../entities/curso";
import { ICampiRepository } from "../../../repositories/ICampiRepository";
import { ICursoRepository } from "../../../repositories/ICursoRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  nome: string;
  campus_id: string;
  universidade_id: string;
  turno: Turno;
  modalidade: Modalidade;
}

@injectable()
class CreateCursoUseCase {
  constructor(
    @inject("CursosRepository")
    private cursoRepository: ICursoRepository,

    @inject("CampiRepository")
    private campusRepository: ICampiRepository,

    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute({
    nome,
    campus_id,
    universidade_id,
    turno,
    modalidade,
  }: IRequest) {
    const universidadeExists = await this.universidadeRepository.findById(
      universidade_id
    );

    if (!universidadeExists)
      throw new AppError(
        "Universidade não existe!!!\nVocê não pode registrar um curso sem uma universidasde!!!",
        404
      );

    const campusExists = await this.campusRepository.findById(campus_id);

    if (!campusExists)
      throw new AppError(
        "Campus não existe!!!\nVocê não pode registrar um curso sem um campus!!!",
        404
      );

    const cursoExists = await this.cursoRepository.findEspecificCourse(
      nome,
      turno,
      modalidade
    );

    if (cursoExists) throw new AppError("Esse curso ja foi registrado!!!");

    await this.cursoRepository.create({
      nome,
      turno,
      modalidade,
      campus_id,
      universidade_id,
    });
  }
}

export { CreateCursoUseCase };
