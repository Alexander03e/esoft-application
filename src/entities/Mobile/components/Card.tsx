import { Card, CardContent, Typography, CardActions, Divider } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import CategoryIcon from '@mui/icons-material/Category';
import { IEvent } from '../types';
import { DeleteButton } from '@/Components/buttons/DeleteButton';
import dayjs from 'dayjs';
import { EVENT_TYPES } from '../consts';
import { useMobileStore } from '@/Store/mobileSlice';

export const EventCard = ({ event }: { event: IEvent }) => {
    const { id } = event;
    const { realtorId } = useMobileStore();

    const getDuration = () => {
        if (!event?.endDateTime || !event?.startDateTime) {
            return null;
        }
        const startDate = new Date(event?.startDateTime);
        const endDate = new Date(event?.endDateTime);
        // @ts-ignore
        const differenceInMilliseconds = startDate - endDate;

        const totalMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
        const days = Math.floor(totalMinutes / (60 * 24));
        const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
        const minutes = totalMinutes % 60;

        const duration = `${Math.abs(days)} дней: ${Math.abs(hours)} часов: ${Math.abs(minutes)} минут`;

        return duration;
    };

    const duration = getDuration();

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
                ></Typography>
                <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CategoryIcon sx={{ marginRight: 1 }} />
                    Тип события: {EVENT_TYPES[event.typesOfIvent]}
                </Typography>
                <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CommentIcon sx={{ marginRight: 1 }} />
                    Комментарий: {event.comment}
                </Typography>
                {event?.startDateTime && (
                    <Typography
                        variant='body2'
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                    >
                        Дата начала: {dayjs(event.startDateTime).format('DD.MM.YYYY, HH:mm')}
                    </Typography>
                )}
                {event?.endDateTime && (
                    <Typography
                        variant='body2'
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                    >
                        Дата конца: {dayjs(event.endDateTime).format('DD.MM.YYYY, HH:mm')}
                    </Typography>
                )}
                {duration && (
                    <Typography
                        variant='body2'
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                    >
                        Длительность: {duration}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <DeleteButton id={id} resourceId={Number(realtorId)} withResourceId />
            </CardActions>
        </Card>
    );
};
