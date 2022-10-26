import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const alreadyExistUserId = this.usersRepository.findById(user_id);
    if (!alreadyExistUserId) {
      throw new Error("User doesn't exist");
    }
    return alreadyExistUserId;
  }
}

export { ShowUserProfileUseCase };
