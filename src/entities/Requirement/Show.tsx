import { Show } from '@/Components/Show.tsx';
import { NavLink, useParams } from 'react-router-dom';
import { IRequirementResponse } from './types.ts';
import { Box, Typography } from '@mui/material';
import { PATHS } from '@/Shared/consts';

export const ShowRequirement = () => {
    const { id } = useParams();

    return <Show resource="requirement" id={id} render={(data: IRequirementResponse) => {
        return (
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    Потребность {id}
                </Typography>
                <Typography variant="body1">ID: {data?.id}</Typography>
                <Typography variant="body1">Клиент: <NavLink
                    to={`${PATHS.REALTOR.CLIENTS.ABSOLUTE}/${data?.client?.id}`}>{data?.client?.firstname}</NavLink></Typography>
                <Typography variant="body1">Агент: <NavLink
                    to={`${PATHS.REALTOR.AGENTS.ABSOLUTE}/${data?.agent?.id}`}>{data?.agent?.firstname}</NavLink></Typography>
                <Typography variant="body1">Тип: {data?.type}</Typography>
                <Typography variant="body1">Город: {data?.city}</Typography>
                <Typography variant="body1">Улица: {data?.street}</Typography>
                <Typography variant="body1">Номер дома: {data?.homeNumber}</Typography>
                <Typography variant="body1">Номер квартиры: {data?.flatNumber}</Typography>
                <Typography variant="body1">Минимальная цена: {data?.minPrice}</Typography>
                <Typography variant="body1">Максимальная цена: {data?.maxPrice}</Typography>
                <Typography variant="body1">Минимальная площадь: {data?.minArea}</Typography>
                <Typography variant="body1">Максимальная площадь: {data?.maxArea}</Typography>
                <Typography variant="body1">Минимальное количество
                    комнат: {data?.minCountOfRooms}</Typography>
                <Typography variant="body1">Максимальное количество
                    комнат: {data?.maxCountOfRooms}</Typography>
                <Typography variant="body1">Минимальный этаж: {data?.minFloor}</Typography>
                <Typography variant="body1">Максимальный этаж: {data?.maxFloor}</Typography>
                <Typography variant="body1">Минимальное количество
                    этажей: {data?.minCountOfFloors}</Typography>
                <Typography variant="body1">Максимальное количество
                    этажей: {data?.maxCountOfFloors}</Typography>
                <Typography variant="body1">Транзакция: {data?.transaction}</Typography>
            </Box>
        );
    }} />;
};