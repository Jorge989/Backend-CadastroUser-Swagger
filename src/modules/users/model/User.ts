import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
class User {
  id?: string;
  name: string;
  email: string;
  senha: string;
  telefone: number;
  data_criacao: Date;
  data_atualizacao: Date;
  ultimo_login: Date;
  hasPassword() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
