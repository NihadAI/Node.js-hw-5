import { Service } from "typedi";
import { AppDataSource } from "../dataSource";
import { UserEntity } from "../entity/user/User";
import { User } from "../../../interfaces";

@Service()
class UsersRepository {
  repository;
  constructor() {
    this.repository = AppDataSource.getRepository(UserEntity);
  }

  getByEmail = async (email: string): Promise<User | null> => {
    const response = await this.repository.findOne({ where: { email } });
    return response;
  };

  createAUser = async (user: User): Promise<User> => {
    const response = this.repository.create(user);
    await this.repository.save(response);
    return response;
  };
}

export default UsersRepository;
