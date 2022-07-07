import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amenity_id: number

    @Column()
    user_id: number

    @Column()
    start_time: number

    @Column()
    end_time: number

    @Column()
    date: Date
}