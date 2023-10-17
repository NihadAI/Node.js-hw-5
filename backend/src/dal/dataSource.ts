import { DataSource } from "typeorm"
import { UserEntity } from "./entity/user/User"
import { NewspostEntity } from "./entity/newspost/Newspost"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "55236",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [UserEntity, NewspostEntity],
    subscribers: [],
    migrations: [],
})     