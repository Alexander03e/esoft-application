export type TEvent = 'MeetingWithTheClient' | "ShowingAnObject" | "ScheduledCall"

export interface IEvent {
    id: number;
    dateTime: string;
    typesOfIvent: TEvent
    comment: string;
    agent: number
}