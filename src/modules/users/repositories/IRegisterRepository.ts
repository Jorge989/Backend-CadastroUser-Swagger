import { User } from "../model/User";
interface IRegisterUserDTO {
  name: string;
  email: string;
  senha: string;
  telefone: number;
  data_criacao: Date;
  data_atualizacao: Date;
  ultimo_login: Date;
}

interface IRegisterUserRepository {
  findByEmail(email: string): User;
  list(): User[];
  create({
    name,
    email,
    senha,
    telefone,
    data_atualizacao,
    data_criacao,
    ultimo_login,
  }: IRegisterUserDTO): User;
}

export { IRegisterUserRepository, IRegisterUserDTO };
