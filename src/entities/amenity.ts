import {Column, Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm"
import Reservation from "./reservation";

@Entity()
export default class Amenity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @OneToMany(() => Reservation, (reserv) => reserv.amenity)
    reservations: Reservation
}