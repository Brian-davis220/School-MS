import { DataSource } from "typeorm";
import { User } from "./users/user.entity";

export const AppDataSource = new DataSource({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'200819',
    database:'school_ms',
    entities:[User],
    migrations:['src/migrations/*.ts'],
    synchronize:false,

})