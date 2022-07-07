import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Reservation} from "./reservation";

@Entity()
export class Amenity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Reservation, (reservation) => reservation.amenity_id)
    reservations: Reservation[]
}