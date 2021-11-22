import { AppError } from "../../../../../errors/AppErros";
import { UniversidadesRepositoryInMemory } from "../../../repositories/in-memory/UniversidadesRepositoryInMemory";
import { CreateUniversidadeUseCase } from "./CreateUniversidadeUseCase";

let createUniversidadeUseCase: CreateUniversidadeUseCase;
let universidadesRepositoryInMemory: UniversidadesRepositoryInMemory;

describe("Create Universidade", () => {
  beforeEach(() => {
    universidadesRepositoryInMemory = new UniversidadesRepositoryInMemory();
    createUniversidadeUseCase = new CreateUniversidadeUseCase(
      universidadesRepositoryInMemory
    );
  });

  it("deve ser capaz de criar uma nova universidade", async () => {
    const universidade = {
      nome: "universidade Teste",
      cnpj: "cnpj teste",
    };

    await createUniversidadeUseCase.execute({
      nome: universidade.nome,
      cnpj: universidade.cnpj,
    });

    const universidadeCreated =
      await universidadesRepositoryInMemory.findByCnpj(universidade.cnpj);

    console.log(universidadeCreated);
    expect(universidadeCreated).toHaveProperty("id");
  });

  it("não deve ser capaz de criar uma nova universidade com o mesmo cnpj", async () => {
    expect(async () => {
      const universidade = {
        nome: "universidade Teste",
        cnpj: "cnpj teste",
      };

      await createUniversidadeUseCase.execute({
        nome: universidade.nome,
        cnpj: universidade.cnpj,
      });

      await createUniversidadeUseCase.execute({
        nome: universidade.nome,
        cnpj: universidade.cnpj,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
