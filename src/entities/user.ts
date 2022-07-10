import {Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm"
import Reservation from "./reservation";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => Reservation, (reserv) => reserv.user)
    reservations: Reservation
}