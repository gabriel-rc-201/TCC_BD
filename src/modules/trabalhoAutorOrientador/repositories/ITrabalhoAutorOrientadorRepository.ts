interface ITrabalhoAutorOrientadorRepository {
  create(
    autorid: number,
    orientadorid: number,
    trabalhoacademicoid: number
  ): Promise<void>;
}

export { ITrabalhoAutorOrientadorRepository };
