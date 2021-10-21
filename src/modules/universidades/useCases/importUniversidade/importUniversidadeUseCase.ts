import fs from "fs";
import csvParse from "csv-parse";
import { inject, injectable } from "tsyringe";
import { IUniversidadeRepository } from "../../repositories/IUniversidadesRepository";

interface IImportUniversidade {
  nome: string;
  cnpj: string;
}

@injectable()
class ImportUniversidadeUseCase {
  constructor(
    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  loadUniversidade(file: Express.Multer.File): Promise<IImportUniversidade[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const universidade: IImportUniversidade[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [nome, cnpj] = line;
          universidade.push({ nome, cnpj });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(universidade);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const universidade = await this.loadUniversidade(file);

    universidade.map(async (universidade) => {
      const { nome, cnpj } = universidade;

      const existAreaEstudo = await this.universidadeRepository.findByNome(
        nome
      );

      if (!existAreaEstudo) {
        await this.universidadeRepository.create({ nome, cnpj });
      }
    });
  }
}

export { ImportUniversidadeUseCase };
