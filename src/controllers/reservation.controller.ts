import {ReservationEntity} from "../entities/reservation.entity";
import dataSource from "../orm/dbInitConnection";
import {Raw} from "typeorm";
import {ReservationDto} from "../dtos/reservation.dto";
import {
    getReservationsByUserInterface,
    groupReservationsByUserInterface,
    ReservationByUserDto,
    transformReservationInterface
} from "../interfaces/reservation.interface";

const getReservations = async (amenity_id: number, day: string): Promise<ReservationDto[]> => {
    const result: ReservationEntity[] = await dataSource.getRepository(ReservationEntity).find({
        where: {
            amenity_id,
            date: Raw(date => `${date} >= '${transformDate(day, "00:00:00")}' and ${date} < '${transformDate(day, "23:59:59")}'`)
        },
        order: {
            start_time: "ASC",
        },
        relations: ["amenity"],
    });

    if (result.length) return result.map(transformReservation);

    return [];
}

const getReservationsByUser: getReservationsByUserInterface = async (user_id: number) => {
    let res: ReservationByUserDto = {};

    res = (await dataSource.getRepository(ReservationEntity).find({
        where: {
            user_id,
        },
        order: {
            date: "ASC"
        }
    })).reduce(groupReservationsByUser, res);

    return res;
}

const transformReservation: transformReservationInterface = (reserv: ReservationEntity): ReservationDto => ({
    reservation_id: reserv.id,
    amenity_id: reserv.amenity_id,
    amenity_name: reserv.amenity.name,
    start_time: transformTime(reserv.start_time),
    duration: reserv.end_time - reserv.start_time,
});

const groupReservationsByUser: groupReservationsByUserInterface = (acc: ReservationByUserDto, curr): ReservationByUserDto => {
    const date: string = getDate(curr.date);

    if (date in acc) {
        acc[date].push(curr);
        return acc;
    }

    acc[date] = [curr];
    return acc;
}

const transformTime = (start_time: number): string => {
    const time = new Date(new Date("00").getTime() + start_time * 60000);
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();

    return `${transformTimeNumbers(hours)}:${transformTimeNumbers(minutes)}`;
}

const transformTimeNumbers = (numbers) => numbers < 10 ? `0${numbers}` : numbers;

const transformDate = (date: string, time: string) => `${date} ${time}`;

const getDate = (d: string): string => {
    const date: Date = new Date(d);

    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export {
    getReservations,
    transformReservation,
    getReservationsByUser,
}