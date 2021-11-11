import { container } from "tsyringe";

import { IAutoresRepository } from "../../modules/accounts/repositories/IAutoresRepository";
import { AutoresRepository } from "../../modules/accounts/repositories/implementations/AutoresRepository";
import { IOrientadoresRepository } from "../../modules/accounts/repositories/IOrientadoresRepository";
import { OrientadoresRepository } from "../../modules/accounts/repositories/implementations/OrientadoresRepository";
import { IAreaEstudoRepository } from "../../modules/areasEstudo/repositories/IAreasEstudoRepository";
import { AreasEstudoRepository } from "../../modules/areasEstudo/repositories/implementations/AreasEstudoRepository";
import { IUniversidadeRepository } from "../../modules/universidades/repositories/IUniversidadesRepository";
import { UniversidadeRepository } from "../../modules/universidades/repositories/implementations/UniversidadesRepository";
import { IDominioRepository } from "../../modules/universidades/repositories/IDominiosRepository";
import { DominiosRepository } from "../../modules/universidades/repositories/implementations/DominiosRepository";
import { ICursoRepository } from "../../modules/universidades/repositories/ICursoRepository";
import { CursosRepository } from "../../modules/universidades/repositories/implementations/CursosRepository";
import { ICampiRepository } from "../../modules/universidades/repositories/ICampiRepository";
import { CampiRepository } from "../../modules/universidades/repositories/implementations/CampiRepository";

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

container.registerSingleton<IOrientadoresRepository>(
  "OrientadoresRepository",
  OrientadoresRepository
);

container.registerSingleton<IDominioRepository>(
  "DominiosRepository",
  DominiosRepository
);

container.registerSingleton<ICursoRepository>(
  "CursosRepository",
  CursosRepository
);

container.registerSingleton<ICampiRepository>(
  "CampiRepository",
  CampiRepository
);
