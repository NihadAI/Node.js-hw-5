import { Service } from "typedi";
import { User } from "../../interfaces";
import UsersRepository from "../dal/users/users.repository";

@Service()
class UsersService {
  constructor(private users: UsersRepository ) {}

  getUserByEmail = async (email: string): Promise<User | null> => {
    return this.users.getByEmail(email)
  };

  createAUser = async (user: User): Promise<User> => {
    return this.users.createAUser(user)
  };

}

export default UsersService;
