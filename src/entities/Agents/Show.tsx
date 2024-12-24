import { Show } from '@/Components/Show.tsx';
import { useParams } from 'react-router-dom';
import { IAgent } from './types.ts';
import { Typography } from '@mui/material';

export const ShowAgent = () => {
    const { id } = useParams();

    return (
        <Show id={id} resource="agent" render={(data: IAgent) => {
            return (
                <div>
                    <Typography>Агент {data?.id}</Typography><br />
                    <Typography>Имя: {data?.firstname}</Typography>
                    <Typography>Фамилия: {data?.lastname}</Typography>
                    <Typography>Отчество: {data?.patronymic}</Typography>
                    <Typography>Телефон: {data?.proportion}</Typography>
                </div>
            );
        }} />
    );
};