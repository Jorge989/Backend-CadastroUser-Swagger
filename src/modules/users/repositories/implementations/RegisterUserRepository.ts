import { User } from "../../model/User";

import {
  IRegisterUserDTO,
  IRegisterUserRepository,
} from "../../repositories/IRegisterRepository";

class RegisterUserRepository implements IRegisterUserRepository {
  private users: User[];
  private static INSTANCE: RegisterUserRepository;
  private constructor() {
    this.users = [];
  }
  public static getInstance(): RegisterUserRepository {
    if (!RegisterUserRepository.INSTANCE) {
      RegisterUserRepository.INSTANCE = new RegisterUserRepository();
    }
    return RegisterUserRepository.INSTANCE;
  }
  create({ name, email, senha, telefone }: IRegisterUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      senha,
      telefone,
      data_criacao: new Date(),
      data_atualizacao: new Date(),
      ultimo_login: new Date(),
    });

    this.users.push(user);
    return user;
  }
  list(): User[] {
    return this.users;
  }
  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}
export { RegisterUserRepository };
