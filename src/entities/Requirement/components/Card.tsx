import React from 'react';
import { Card, CardContent, Typography, Grid2 as Grid } from '@mui/material';
import {
    LocationCity,
    Home,
    AttachMoney,
    SquareFoot,
    MeetingRoom,
    Layers,
    Business,
} from '@mui/icons-material';
import { IRequirement } from '../types';

export const RequirementCard: React.FC<IRequirement> = ({
    id,
    type,
    city,
    street,
    homeNumber,
    flatNumber,
    minPrice,
    maxPrice,
    minArea,
    maxArea,
    minCountOfRooms,
    maxCountOfRooms,
    minFloor,
    maxFloor,
    minCountOfFloors,
    maxCountOfFloors,
    transaction,
}) => {
    return (
        <Card sx={{ margin: 'auto', mt: 2 }}>
            <CardContent>
                <Typography variant='h5' component='div' gutterBottom>
                    Потребность №{id}
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                        {/* <Typography variant='body1'>
                            <Person /> Клиент: {client}
                        </Typography>
                        <Typography variant='body1'>
                            <Business /> Агент: {agent}
                        </Typography> */}
                        <Typography variant='body1'>
                            <Home /> Тип:{' '}
                            {type === 'FLAT' ? 'Квартира' : type === 'HOUSE' ? 'Дом' : 'Участок'}
                        </Typography>
                        <Typography variant='body1'>
                            <LocationCity /> Город: {city}
                        </Typography>
                        <Typography variant='body1'>
                            <Home /> Улица: {street}
                        </Typography>
                        <Typography variant='body1'>
                            <Home /> Номер дома: {homeNumber}
                        </Typography>
                        <Typography variant='body1'>
                            <Home /> Номер квартиры: {flatNumber}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography variant='body1'>
                            <AttachMoney /> Диапазон цен: {minPrice} - {maxPrice}
                        </Typography>
                        <Typography variant='body1'>
                            <SquareFoot /> Диапазон площадей: {minArea} - {maxArea}
                        </Typography>
                        <Typography variant='body1'>
                            <MeetingRoom /> Количество комнат: {minCountOfRooms} - {maxCountOfRooms}
                        </Typography>
                        <Typography variant='body1'>
                            <Layers /> Этаж: {minFloor} - {maxFloor}
                        </Typography>
                        <Typography variant='body1'>
                            <Layers /> Этажность: {minCountOfFloors} - {maxCountOfFloors}
                        </Typography>
                        <Typography variant='body1'>
                            <Business /> Транзакция: {transaction}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
