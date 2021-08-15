import { Response, Request } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import bcrypt from "bcryptjs";

class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}
  handle(request: Request, response: Response): Response {
    const {
      name,
      email,
      senha,
      telefone,
      ultimo_login,
      data_criacao,
      data_atualizacao,
    } = request.body;

    const { user, token } = this.registerUserUseCase.execute({
      name,
      email,
      senha: bcrypt.hashSync(senha, 8),
      telefone,
      ultimo_login,
      data_criacao,
      data_atualizacao,
    });

    return response.status(201).json({ user, token });
  }
}
export { RegisterUserController };
