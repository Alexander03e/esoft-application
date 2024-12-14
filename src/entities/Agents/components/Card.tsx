import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { IAgent } from '../types';
import { EditButton } from '@/Components/buttons/EditButton';

export const AgentCard = (props: IAgent): ReactElement => {
    const { firstname, lastname, patronymic, id, proportion } = props;
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
                {proportion && <Divider sx={{ marginBlock: 2 }} />}
                {proportion && <Typography>Доля от сделки: {proportion}</Typography>}
            </CardContent>
            <CardActions>
                <EditButton id={id} />
            </CardActions>
        </Card>
    );
};
