import { Card, CardContent, Typography, CardActions, Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import CommentIcon from '@mui/icons-material/Comment';
import CategoryIcon from '@mui/icons-material/Category';
import { IEvent } from '../types';
import { EditButton } from '@/Components/buttons/EditButton';
import { DeleteButton } from '@/Components/buttons/DeleteButton';
import dayjs from 'dayjs';
import { EVENT_TYPES } from '../consts';

export const EventCard = ({ event }: { event: IEvent }) => {
    const { id } = event;
    const formattedDate = dayjs(event.dateTime).format('DD.MM.YYYY, HH:mm');

    return (
        <Card variant='outlined' sx={{ maxWidth: '100%', mb: '16px', boxShadow: 2 }}>
            <CardContent>
                <Typography variant='h5' component='div' sx={{ mb: 2 }}>
                    ID: {event.id}
                </Typography>
                <Divider />
                <Typography
                    variant='body2'
                    sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 2 }}
                >
                    <EventIcon sx={{ marginRight: 1 }} />
                    Дата и время: {formattedDate}
                </Typography>
                <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CategoryIcon sx={{ marginRight: 1 }} />
                    Тип события: {EVENT_TYPES[event.typesOfIvent]}
                </Typography>
                <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CommentIcon sx={{ marginRight: 1 }} />
                    Комментарий: {event.comment}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <EditButton id={id} />
                <DeleteButton id={id} />
            </CardActions>
        </Card>
    );
};
