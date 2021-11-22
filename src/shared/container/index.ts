import { container } from "tsyringe";

import { IAutoresRepository } from "../../modules/accounts/autor/repositories/IAutoresRepository";
import { AutoresRepository } from "../../modules/accounts/autor/repositories/implementations/AutoresRepository";
import { IOrientadoresRepository } from "../../modules/accounts/orientador/repositories/IOrientadoresRepository";
import { OrientadoresRepository } from "../../modules/accounts/orientador/repositories/implementations/OrientadoresRepository";
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
import { INomeEmCitacaoBibliograficaRepository } from "../../modules/accounts/autor/repositories/INomeEmCitacaoBibliograficaRepository";
import { NomeEmCitacaoBibliograficaRepository } from "../../modules/accounts/autor/repositories/implementations/NomeEmCItacaoBibliograficaRepository";
import { ITrabalhoAcademicoRepository } from "../../modules/trabalhoAcademico/repositories/ITrabalhoAcademicoRepository";
import { TrabalhosAcademicosRepository } from "../../modules/trabalhoAcademico/repositories/implementations/TrabalhoAcademicoRepository";
import { ITrabalhoAutorOrientadorRepository } from "../../modules/trabalhoAutorOrientador/repositories/ITrabalhoAutorOrientadorRepository";
import { TrabalhoAutorOrientadorRepository } from "../../modules/trabalhoAutorOrientador/repositories/implementations/TrabalhoAutorOrientadorRepository";

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

container.registerSingleton<INomeEmCitacaoBibliograficaRepository>(
  "NomeEmCitacaoBibliografica",
  NomeEmCitacaoBibliograficaRepository
);

container.registerSingleton<ITrabalhoAcademicoRepository>(
  "TrabalhoAcademico",
  TrabalhosAcademicosRepository
);

container.registerSingleton<ITrabalhoAutorOrientadorRepository>(
  "RelacaoTrabalhoAutorOrientador",
  TrabalhoAutorOrientadorRepository
);
