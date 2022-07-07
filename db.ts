import {DataSource} from "typeorm";

const dataSource: DataSource = new DataSource({
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,

    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: true,
    type: "postgres",
})

export default dataSource