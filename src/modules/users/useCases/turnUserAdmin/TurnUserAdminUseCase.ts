import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const idAlreadyExist = this.usersRepository.findById(user_id);
    if (!idAlreadyExist) {
      throw new Error("User Doesn't exist");
    }
    const user = this.usersRepository.turnAdmin(idAlreadyExist);
    return user;
  }
}

export { TurnUserAdminUseCase };
