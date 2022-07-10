import Reservation from "../entities/reservation";
import dataSource from "../orm/dbInitConnection";
import {Raw} from "typeorm";
import {ReservationDto} from "../dtos/reservation.dto";

const getReservations = async (amenity_id: number, day: string): Promise<ReservationDto[]> => {
    const result: Reservation[] = await dataSource.getRepository(Reservation).find({
        where: {
            amenity_id,
            date: Raw(date => `${date} >= '${transformDate(day, "00:00:00")}' and ${date} < '${transformDate(day, "23:59:59")}'`)
        },
        order: {
            start_time: "ASC",
        },
        relations: ["amenity"]
    });

    if (result.length) return result.map(transformReservation);

    return [];
}

const getReservationsByUser = async (user_id: number): Promise<Reservation[]> => {
    const result: Reservation[] = await dataSource.getRepository(Reservation).find({
        where: {
            user_id,
        },
        order: {
            date: "ASC"
        }

    });

    console.log(result)
    if (result.length) return result;

    return [];
}

const transformReservation = (reserv: Reservation): ReservationDto => ({
    reservation_id: reserv.id,
    amenity_id: reserv.amenity_id,
    amenity_name: reserv.amenity.name,
    start_time: transformTime(reserv.start_time),
    duration: reserv.end_time - reserv.start_time,
});

const groupReservationsByUser = () => {
}

const transformTime = (start_time: number): string => {
    const time = new Date(new Date("00").getTime() + start_time * 60000);
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();

    return `${transformTimeNumbers(hours)}:${transformTimeNumbers(minutes)}`;
}

const transformTimeNumbers = (numbers) => numbers < 10 ? `0${numbers}` : numbers;

const transformDate = (date: string, time: string) => `${date} ${time}`;

export {
    getReservations,
    transformReservation,
    getReservationsByUser,
}