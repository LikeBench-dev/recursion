export enum EventTypes {
    NORMAL = 'NORMAL', // зелёный
    DANGEROUS = 'DANGEROUS', // оранжевый
    CRITICAL = 'CRITICAL', // красный
}

export type Data = {
    events: Event[];
    intervalDates: IntervalDates;
};

export interface IntervalDates {
    dateStart: string;
    dateEnd: string;
}

export interface Event {
    dateStart: string;
    dateEnd: string;
    type: EventTypes;
}

export interface EventStyle {
    left: string;
    width: string;
    backgroundColor: string;
}
