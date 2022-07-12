import {ReservationDto} from "../dtos/reservation.dto";
import ReservationEntity from "../entities/reservation.entity";

export interface groupReservationsByUserInterface {
    (acc: ReservationByUserDto, curr: ReservationEntity): ReservationByUserDto
}

export type ReservationByUserDto = {
    [prop: string]: ReservationEntity[]
}

export interface getReservationsByUserInterface {
    (user_id: number): Promise<ReservationByUserDto>
}

export interface transformReservationInterface {
    (reserv: ReservationEntity): ReservationDto
}