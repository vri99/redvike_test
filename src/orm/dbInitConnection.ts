import "reflect-metadata"
import {DataSource, DataSourceOptions} from "typeorm";
import {AmenityEntity} from "../entities/amenity.entity";
import {ReservationEntity} from "../entities/reservation.entity";
import {UserEntity} from "../entities/user.entity";
import {SeederOptions} from "typeorm-extension";
import AmenitySeeder from "./seeds/amenity.seed";
import ReservationSeeder from "./seeds/reservation.seed";
import UserSeeder from "./seeds/user.seed";

const options: DataSourceOptions & SeederOptions = {
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    username: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    seeds: [AmenitySeeder, UserSeeder, ReservationSeeder],
    entities: [AmenityEntity, UserEntity, ReservationEntity],
    synchronize: true,
    type: "postgres",
}

const dataSource: DataSource = new DataSource(options);

export default dataSource