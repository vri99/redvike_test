import "reflect-metadata"
import {DataSource} from "typeorm";
import AmenityEntity from "../entities/amenity.entity";
import ReservationEntity from "../entities/reservation.entity";
import UserEntity from "../entities/user.entity";

const dataSource: DataSource = new DataSource({
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,

    entities: [AmenityEntity, ReservationEntity, UserEntity],
    synchronize: true,
    type: "postgres",
})

export default dataSource