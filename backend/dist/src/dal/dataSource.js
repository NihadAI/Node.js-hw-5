"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/user/User");
const Newspost_1 = require("./entity/newspost/Newspost");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "55236",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User_1.UserEntity, Newspost_1.NewspostEntity],
    subscribers: [],
    migrations: [],
});
