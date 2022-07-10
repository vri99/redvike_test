import "reflect-metadata"
import {DataSource} from "typeorm";
import Amenity from "../entities/amenity";
import Reservation from "../entities/reservation";
import User from "../entities/user";

const dataSource: DataSource = new DataSource({
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,

    entities: [Amenity, Reservation, User],
    synchronize: true,
    type: "postgres",
})

export default dataSource