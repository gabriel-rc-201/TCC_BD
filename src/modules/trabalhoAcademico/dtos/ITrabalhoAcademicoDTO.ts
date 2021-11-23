enum Tipo {
  ARTIGO = "artigo",
  RESENHA = "resenha",
  TCC = "TCC",
}

enum Nivel {
  GRADUACAO = "graduação",
  MESTRADO = "mestradro",
  DOUTORADO = "doutorado",
}
interface ITrabalhoAcademicoDTO {
  id?: string;
  titulo: string;
  tipo: Tipo;
  nivel: Nivel;
  local_publicacao: string;
  local_arquivo: string;
  data_publicacao?: Date;
  area_estudo_id: string;
}

export { ITrabalhoAcademicoDTO, Tipo, Nivel };
