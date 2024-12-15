import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { IAgent } from '../types';
import { EditButton } from '@/Components/buttons/EditButton';
import { DeleteButton } from '@/Components/buttons/DeleteButton';

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
                <Divider sx={{ marginBlock: 2 }} />
                <Typography>
                    Доля от сделки: {proportion ? `${proportion} %` : 'Не указана'}
                </Typography>
            </CardContent>
            <CardActions>
                <EditButton id={id} />
                <DeleteButton id={id} />
            </CardActions>
        </Card>
    );
};
