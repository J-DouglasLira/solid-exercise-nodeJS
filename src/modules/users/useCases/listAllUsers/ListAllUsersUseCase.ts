import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const idAlreadyExist = this.usersRepository.list();
    const onlyAdminCanSee = idAlreadyExist.find(
      (item) => item.id === user_id && item.admin === true
    );
    /* 
    if (!onlyAdminCanSee) {
      throw new Error("This is not possible");
    } 
    */
    return idAlreadyExist;
  }
}

export { ListAllUsersUseCase };
