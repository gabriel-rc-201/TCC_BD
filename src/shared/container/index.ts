import { container } from "tsyringe";

import { IAutoresRepository } from "../../modules/accounts/repositories/IAutoresRepository";
import { AutoresRepository } from "../../modules/accounts/repositories/implementations/AutoresRepository";
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

container.registerSingleton<IAutoresRepository>(
  "AutoresRepository",
  AutoresRepository
);
