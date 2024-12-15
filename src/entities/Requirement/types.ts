export interface IRequirement {
    id: number;
    client: number;
    agent: number;
    type: 'FLAT' | 'HOUSE' | 'AREA';
    city: string;
    street: string;
    homeNumber: string;
    flatNumber: string;
    minPrice: number;
    maxPrice: number;
    minArea: number;
    maxArea: number;
    minCountOfRooms: number;
    maxCountOfRooms: number;
    minFloor: number;
    maxFloor: number;
    minCountOfFloors: number;
    maxCountOfFloors: number;
    transaction: number;
}

export interface IRequirementResponse {
    id: number;
    client: {id: number};
    agent: {id: number};
    type: 'FLAT' | 'HOUSE' | 'AREA';
    city: string;
    street: string;
    homeNumber: string;
    flatNumber: string;
    minPrice: number;
    maxPrice: number;
    minArea: number;
    maxArea: number;
    minCountOfRooms: number;
    maxCountOfRooms: number;
    minFloor: number;
    maxFloor: number;
    minCountOfFloors: number;
    maxCountOfFloors: number;
    transaction: number;
}

