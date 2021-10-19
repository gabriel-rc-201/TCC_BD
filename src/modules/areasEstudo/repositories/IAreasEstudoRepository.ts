import { AreaEstudo } from "../entities/areasEstudo";

interface ICreateAreaEstudoDTO {
  id: string;
  name: string;
}

interface IAreaEstudoRepository {
  findById(id: string): Promise<AreaEstudo>;
  list(): Promise<AreaEstudo[]>;
  create({ id, name }: ICreateAreaEstudoDTO): Promise<void>;
}

export { ICreateAreaEstudoDTO, IAreaEstudoRepository };
