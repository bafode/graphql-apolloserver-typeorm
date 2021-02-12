import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import path from "path";
import "dotenv-safe/config";

import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { Updoot } from "./entities/Updoot";

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  host: "localhost",
  // port: 5432,
  // username: "postgres",
  // password: "test123",
  // database: "lireddit2",
  synchronize: true,
  logging: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [User, Post, Updoot],
};

export { typeOrmConfig };
