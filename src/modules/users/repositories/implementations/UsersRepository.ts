import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
    });
    return this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User | undefined {
    const emailAlreadyExist = this.users.find((item) => item.email === email);
    return emailAlreadyExist;
  }

  findById(id: string): User | undefined {
    //
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
  }
}

export { UsersRepository };
