import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,} from "typeorm"
import Amenity from "./amenity";
import User from "./user";

@Entity()
export default class Reservation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    start_time: number

    @Column()
    end_time: number

    @Column({type: 'timestamptz'})
    date: string

    @ManyToOne(() => Amenity, (amenity) => amenity.reservations)
    @JoinColumn({ name: 'amenity_id'})
    amenity: Amenity

    @Column()
    amenity_id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => User, (user) => user.reservations)
    user: User

}