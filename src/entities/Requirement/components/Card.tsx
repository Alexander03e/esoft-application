import React from 'react';
import { Card, CardContent, Typography, Grid2 as Grid, CardActions } from '@mui/material';
import {
    LocationCity,
    Home,
    AttachMoney,
    SquareFoot,
    MeetingRoom,
    Layers,
    Business,
    Person,
} from '@mui/icons-material';
import { IRequirement } from '../types';
import { DeleteButton } from '@/Components/buttons/DeleteButton.tsx';
import { EditButton } from '@/Components/buttons/EditButton.tsx';
import { IClient } from '../../Clients/types.ts';
import { IAgent } from '../../Agents/types.ts';
import { NavLink, useNavigate } from 'react-router-dom';
import { ENTITIES, PATHS } from '@/Shared/consts';
import { SelectEntityButton } from '@/Components/buttons/SelectEntityButton.tsx';

type Props = Omit<IRequirement, 'client' | 'agent'> & {
    client: IClient;
    agent: IAgent;
    isSelectable?: boolean;
};

export const RequirementCard: React.FC<Props> = ({ isSelectable, ...props }) => {
    const navigate = useNavigate();
    const {
        id,
        type,
        city,
        street,
        homeNumber,
        flatNumber,
        minPrice,
        maxPrice,
        client,
        agent,
        minArea,
        maxArea,
        minCountOfRooms,
        maxCountOfRooms,
        minFloor,
        maxFloor,
        minCountOfFloors,
        maxCountOfFloors,
        transaction,
    } = props || {};

    // Карточка предложений
    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <Typography
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/realtor/requirement/${id}`)}
                    variant='h5'
                    component='div'
                    gutterBottom
                >
                    Потребность №{id}
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                        <Typography variant='body1'>
                            <Person /> Клиент:{' '}
                            <NavLink to={`${PATHS.REALTOR.CLIENTS.ABSOLUTE}/${client?.id}`}>
                                {client?.firstname}
                            </NavLink>
                        </Typography>
                        <Typography variant='body1'>
                            <Business /> Агент:{' '}
                            <NavLink to={`${PATHS.REALTOR.AGENTS.ABSOLUTE}/${agent?.id}`}>
                                {agent?.firstname}
                            </NavLink>
                        </Typography>
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
            <CardActions>
                <DeleteButton id={id} />
                <EditButton id={id} />
                {isSelectable && (
                    <SelectEntityButton
                        id={id}
                        label={'потребность'}
                        entityName={ENTITIES.REQUIREMENT}
                        entityItem={props}
                    />
                )}
            </CardActions>
        </Card>
    );
};
