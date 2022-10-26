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
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    console.log(user);
    return user;
  }

  list(): User[] {
    return this.users;
  }

  turnAdmin(receivedUser: User): User { }

  findByEmail(email: string): User | undefined {
    const emailAlreadyExist = this.users.find((item) => item.email === email);
    return emailAlreadyExist;
  }

  findById(id: string): User | undefined {
    const findById = this.users.find((item) => item.id === id);
    return findById;
  }
}

export { UsersRepository };
