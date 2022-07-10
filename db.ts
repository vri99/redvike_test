import {DataSource} from "typeorm";

const dataSource: DataSource = new DataSource({
    database: "postgres",
    password: "password",
    username: "postgres",
    host: "postgres",
    port: 5432,

    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: true,
    type: "postgres",
})

export default dataSource