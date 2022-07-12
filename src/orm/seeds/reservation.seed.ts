import {Seeder} from 'typeorm-extension';
import {DataSource} from 'typeorm';
import {ReservationEntity} from "../../entities/reservation.entity";

export default class ReservationSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository = dataSource.getRepository(ReservationEntity);
        await repository.insert([
            {
                id: 1,
                amenity_id: 1,
                start_time: 300,
                end_time: 600,
                user_id: 1,
                date: setDate("2022-07-10"),
            },
            {
                id: 2,
                amenity_id: 1,
                start_time: 300,
                end_time: 600,
                user_id: 1,
                date: setDate("2022-06-10"),
            },
            {
                id: 3,
                amenity_id: 1,
                start_time: 300,
                end_time: 600,
                user_id: 1,
                date: setDate("2022-06-11"),
            },
            {
                id: 4,
                amenity_id: 2,
                start_time: 300,
                end_time: 600,
                user_id: 2,
                date: setDate("2022-07-10"),
            },
            {
                id: 5,
                amenity_id: 1,
                start_time: 300,
                end_time: 600,
                user_id: 1,
                date: setDate("2022-07-10"),
            },
            {
                id: 6,
                amenity_id: 1,
                start_time: 300,
                end_time: 600,
                user_id: 1,
                date: setDate("2022-06-10"),
            },
        ]);
    }
}

const setDate = (date): string => {
    return new Date(date).toISOString();
}