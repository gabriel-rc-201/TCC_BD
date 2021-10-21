import { container } from "tsyringe";
import { IAreaEstudoRepository } from "../../modules/areasEstudo/repositories/IAreasEstudoRepository";
import { AreasEstudoRepository } from "../../modules/areasEstudo/repositories/implementations/AreasEstudoRepository";
import { UniversidadeRepository } from "../../modules/universidades/repositories/implementations/UniversidadesRepository";
import { IUniversidadeRepository } from "../../modules/universidades/repositories/IUniversidadesRepository";

container.registerSingleton<IAreaEstudoRepository>(
  "AreasEstudoRepository",
  AreasEstudoRepository
);

container.registerSingleton<IUniversidadeRepository>(
  "UniversidadeRepository",
  UniversidadeRepository
);
