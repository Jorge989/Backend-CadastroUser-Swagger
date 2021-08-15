import { RegisterUserRepository } from "../../repositories/implementations/RegisterUserRepository";
import { RegisterUserController } from "./RegisterUserController";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
const registerUserRepository = RegisterUserRepository.getInstance();
const registerUserUseCase = new RegisterUserUseCase(registerUserRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);
export { registerUserController, registerUserUseCase, RegisterUserController };
