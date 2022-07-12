import {Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm"
import {ReservationEntity} from "./reservation.entity";

@Entity({name: "user"})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => ReservationEntity, (reserv) => reserv.user)
    reservations: ReservationEntity
}