import fs from "fs";
import csvParse from "csv-parse";
import { inject, injectable } from "tsyringe";
import { IAreaEstudoRepository } from "../../repositories/IAreasEstudoRepository";

interface IImportAreaEstudo {
  id: string;
  name: string;
}

@injectable()
class ImportAreasEstudoUseCase {
  constructor(
    @inject("AreasEstudoRepository")
    private areasEstudoRepository: IAreaEstudoRepository
  ) {}

  loadAreasEstudo(file: Express.Multer.File): Promise<IImportAreaEstudo[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const areasEstudo: IImportAreaEstudo[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [id, name] = line;
          areasEstudo.push({ id, name });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(areasEstudo);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const areasEstudo = await this.loadAreasEstudo(file);

    areasEstudo.map(async (areaEstudo) => {
      const { id, name } = areaEstudo;

      const existAreaEstudo = await this.areasEstudoRepository.findById(id);

      if (!existAreaEstudo) {
        await this.areasEstudoRepository.create({ id, name });
      }
    });
  }
}

export { ImportAreasEstudoUseCase };
