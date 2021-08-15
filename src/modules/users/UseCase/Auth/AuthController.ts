import { Response, Request } from "express";
import { AuthUseCase } from "./AuthControllerUseCase";
import bcrypt from "bcryptjs";

class RegisterUserController {
  constructor(private registerUserUseCase: AuthUseCase) {}
  handle(request: Request, response: Response): Response {
    const { email, senha } = request.body;
    const token = request.headers;
    const { user } = this.registerUserUseCase.execute({
      email,
      senha: bcrypt.hashSync(senha, 8),
    });

    return response.status(201).json({ user });
  }
}
export { RegisterUserController };
