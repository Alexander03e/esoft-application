import { useParams } from 'react-router-dom';
import { Show } from '@/Components/Show.tsx';
import { IClient } from './types.ts';
import { Typography } from '@mui/material';

export const ShowClients = () => {
    const { id } = useParams();
    return (
        <Show resource="client" id={id} render={(data: IClient) => {
            return (
                <div>
                    <Typography>Клиент {data?.id}</Typography><br />
                    <Typography>Имя: {data?.firstname}</Typography>
                    <Typography>Фамилия: {data?.lastname}</Typography>
                    <Typography>Отчество: {data?.patronymic}</Typography>
                    <Typography>Телефон: {data?.phone}</Typography>
                    <Typography>Email: {data?.email}</Typography>
                </div>
            );
        }}
        />
    );
};