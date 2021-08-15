import { User } from "../../model/User";
require("dotenv").config();
import { sign } from "jsonwebtoken";
import { IRegisterUserRepository } from "../../repositories/IRegisterRepository";
interface IRequest {
  name: string;
  email: string;
  senha: string;
  telefone: number;
  data_criacao: Date;
  data_atualizacao: Date;
  ultimo_login: Date;
}
interface IResponse {
  user: User;
  token: string;
}

class RegisterUserUseCase {
  constructor(private registerRepository: IRegisterUserRepository) {}
  execute({
    name,
    email,
    senha,
    telefone,
    ultimo_login,
    data_criacao,
    data_atualizacao,
  }: IRequest): IResponse {
    const userAlreadyExists = this.registerRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("E-mail já existente");
    }

    const user = this.registerRepository.create({
      name,
      email,
      senha,
      telefone,
      data_atualizacao,
      data_criacao,
      ultimo_login,
    });

    const token = sign({}, process.env.REACT_APP_API_KEY, {
      subject: user.id,
      expiresIn: "1d",
    });

    return { user, token };
  }
}
export { RegisterUserUseCase };
