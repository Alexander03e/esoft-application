import { List } from '@/Components/List';
import { Toolbar } from '@/Components/Toolbar';
import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEvent } from './types';
import { useMobileStore } from '@/Store/mobileSlice';
import map from 'lodash/map';
import { EventCard } from './components/Card';

const sortEvents = (events: IEvent[] | undefined) => {
    if (!events) return [];
    const today = new Date().toISOString().split('T')[0];
    const todayEvents = events.filter(event => event?.startDateTime?.split('T')[0] === today);
    const otherEvents = events.filter(event => event?.startDateTime?.split('T')[0] !== today);
    return { todayEvents, otherEvents };
};

export const Main = () => {
    const navigate = useNavigate();
    const { realtorId } = useMobileStore();
    const [data, setData] = useState<IEvent[] | undefined>(undefined);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { todayEvents, otherEvents } = sortEvents(data);

    return (
        <List
            listId={realtorId ?? undefined}
            onDataLoad={data => setData(data)}
            toolbarComponent={
                <Toolbar sx={{ mb: 2 }}>
                    <Button
                        onClick={() => navigate('create')}
                        startIcon={<Add />}
                        variant='outlined'
                        color='info'
                    >
                        Добавить событие
                    </Button>
                </Toolbar>
            }
        >
            <Box mb={2}>
                <Typography>События на сегодня:</Typography>
            </Box>

            {todayEvents?.length ? (
                map(todayEvents, item => {
                    return <EventCard event={item} />;
                })
            ) : (
                <Typography sx={{ m: 4, textAlign: 'center' }}>На сегодня событий нет</Typography>
            )}

            {otherEvents?.length && (
                <Box mb={2}>
                    <Typography>Остальные события:</Typography>
                </Box>
            )}
            {map(otherEvents, item => (
                <EventCard event={item} />
            ))}
        </List>
    );
};
