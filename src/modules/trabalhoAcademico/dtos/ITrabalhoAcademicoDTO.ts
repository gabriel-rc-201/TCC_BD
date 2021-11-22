interface ITrabalhoAcademicoDTO {
  id: number;
  titulo: string;
  tipo: "artigo" | "resenha" | "TCC";
  nivel: "graduação" | "mestradro" | "doutorado";
  localdepublicacao: string;
  localdoarquivo: string;
  data: Date;
  areaestudoid: string;
}

export { ITrabalhoAcademicoDTO };
