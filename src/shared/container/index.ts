import { container } from "tsyringe";
import { IAreaEstudoRepository } from "../../modules/areasEstudo/repositories/IAreasEstudoRepository";
import { AreasEstudoRepository } from "../../modules/areasEstudo/repositories/implementations/AreasEstudoRepository";

container.registerSingleton<IAreaEstudoRepository>(
  "AreasEstudoRepository",
  AreasEstudoRepository
);
