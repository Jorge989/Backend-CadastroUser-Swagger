import { User } from "../../model/User";

import { sign } from "jsonwebtoken";
import { IRegisterUserRepository } from "../../repositories/IRegisterRepository";
interface IRequest {
  senha: string;
  email: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthUseCase {
  constructor(private registerRepository: IRegisterUserRepository) {}
  execute({ email, senha }: IRequest): IResponse {
    const userAlreadyExists = this.registerRepository.findByEmail(email);
    if (!userAlreadyExists) {
      throw new Error("Usuário ou senha inválidos");
    }
    sign(email, senha);

    return;
  }
}
export { AuthUseCase };
