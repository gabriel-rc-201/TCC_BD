import { AreaEstudo } from "../entities/areasEstudo";

interface ICreateAreaEstudoDTO {
  id: string;
  nome: string;
}

interface IAreaEstudoRepository {
  findById(id: string): Promise<AreaEstudo>;
  list(): Promise<AreaEstudo[]>;
  create({ id, nome }: ICreateAreaEstudoDTO): Promise<void>;
}

export { ICreateAreaEstudoDTO, IAreaEstudoRepository };
