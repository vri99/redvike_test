import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm"
import AmenityEntity from "./amenity.entity";
import UserEntity from "./user.entity";

@Entity({name: "reservation"})
export default class ReservationEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    start_time: number

    @Column()
    end_time: number

    @Column({type: 'timestamptz'})
    date: string

    @ManyToOne(() => AmenityEntity, (amenity) => amenity.reservations)
    @JoinColumn({name: 'amenity_id'})
    amenity: AmenityEntity

    @Column()
    amenity_id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => UserEntity, (user) => user.reservations)
    user: UserEntity

}