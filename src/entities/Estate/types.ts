export interface IEstate {
    id: number;
    city: string;
    street: string;
    homeNumber: string;
    flatNumber: string;
    latitude: number;
    longitude: number;
    type: "AREA" | "HOUSE" | "FLAT";
    floor: number;
    countOfRooms: number;
    countOfFloors: number;
    area: number
}