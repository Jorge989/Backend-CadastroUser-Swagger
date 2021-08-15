import { User } from "../../model/User";
import { IRegisterUserRepository } from "../../repositories/IRegisterRepository";

class ListUsersUseCase {
  constructor(private usersRepository: IRegisterUserRepository) {}
  execute(): User[] {
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListUsersUseCase };
