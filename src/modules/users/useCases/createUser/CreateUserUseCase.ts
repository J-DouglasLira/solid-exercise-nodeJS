import { response } from "express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("Email already Exists");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
