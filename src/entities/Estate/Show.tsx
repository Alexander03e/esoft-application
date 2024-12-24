import { Show } from '@/Components/Show.tsx';
import { IEstate } from './types.ts';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const ShowEstate = () => {
    const { id } = useParams();

    return <Show resource={'estate'} id={id} render={(data: IEstate) => {
        return (
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    Недвижимость {data?.id}
                </Typography>
                <Typography variant="body1">ID: {data?.id}</Typography>
                <Typography variant="body1">Город: {data?.city}</Typography>
                <Typography variant="body1">Улица: {data?.street}</Typography>
                <Typography variant="body1">Номер дома: {data?.homeNumber}</Typography>
                <Typography variant="body1">Номер квартиры: {data?.flatNumber}</Typography>
                <Typography variant="body1">Тип: {data?.type}</Typography>
                <Typography variant="body1">Площадь: {data?.area}</Typography>
                <Typography variant="body1">Количество комнат: {data?.countOfRooms}</Typography>
                <Typography variant="body1">Этаж: {data?.floor}</Typography>
                <Typography variant="body1">Количество этажей: {data?.countOfFloors}</Typography>
            </Box>
        );
    }} />;
};