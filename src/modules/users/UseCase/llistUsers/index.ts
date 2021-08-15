import { RegisterUserRepository } from "../../repositories/implementations/RegisterUserRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from "./ListUsersController";
const categoriesRepository = RegisterUserRepository.getInstance();
const listCategoriesUseCase = new ListUsersUseCase(categoriesRepository);
const listCategoriesController = new ListUsersController(listCategoriesUseCase);

export { listCategoriesController };
