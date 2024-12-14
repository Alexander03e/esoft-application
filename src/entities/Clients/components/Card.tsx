import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { IClient } from '../types';
import { EditButton } from '@/Components/buttons/EditButton';

export const ClientCard = (props: IClient): ReactElement => {
    const { email, firstname, lastname, patronymic, phone, id } = props;
    const noValue = 'Не указано';

    return (
        <Card>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary' }}>
                    {id}
                </Typography>
                <Typography>Имя: {firstname || noValue}</Typography>
                <Typography>Фамилия: {lastname || noValue}</Typography>
                <Typography>Отчество: {patronymic || noValue}</Typography>
                {(phone || email) && <Divider sx={{ marginBlock: 2 }} />}
                {phone && <Typography>{phone}</Typography>}
                {email && <Typography>{email}</Typography>}
            </CardContent>
            <CardActions>
                <EditButton id={id} />
            </CardActions>
        </Card>
    );
};
