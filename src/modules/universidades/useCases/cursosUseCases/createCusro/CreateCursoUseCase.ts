import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { ICampiRepository } from "../../../repositories/ICampiRepository";
import { ICursoRepository } from "../../../repositories/ICursoRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  nome: string;
  campusid: number;
  universidadeid: number;
  turno: "diurno" | "noturno" | "integral";
  modalidade: "licenciatura" | "bacharelado" | "bacharelado e licenciatura";
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
    campusid,
    universidadeid,
    turno,
    modalidade,
  }: IRequest) {
    const universidadeExists = await this.universidadeRepository.findById(
      universidadeid
    );

    if (!universidadeExists)
      throw new AppError(
        "Universidade não existe!!!\nVocê não pode registrar um curso sem uma universidasde!!!"
      );

    const campusExists = await this.campusRepository.findById(campusid);

    if (!campusExists)
      throw new AppError(
        "Universidade não existe!!!\nVocê não pode registrar um curso sem uma campus!!!"
      );

    const cursoExists = await this.cursoRepository.findEspecificCourse(
      nome,
      turno,
      modalidade
    );

    if (cursoExists) throw new AppError("Esse curso ja foi registrado!!!");

    const id =
      parseInt((await this.cursoRepository.findMaxId()).toString()) + 1;

    await this.cursoRepository.create({
      id,
      nome,
      turno,
      modalidade,
      campusid,
      universidadeid,
    });
  }
}

export { CreateCursoUseCase };
