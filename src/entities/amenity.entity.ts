import {Column, Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm"
import {ReservationEntity} from "./reservation.entity";

@Entity({name: "amenity"})
export class AmenityEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @OneToMany(() => ReservationEntity, (reserv) => reserv.amenity)
    reservations: ReservationEntity
}