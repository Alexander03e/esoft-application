import { List } from '@/Components/List';
import { Toolbar } from '@/Components/Toolbar';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEvent } from './types';
import { useMobileStore } from '@/Store/mobileSlice';
import map from 'lodash/map';
import { EventCard } from './components/Card';

export const Main = () => {
    const navigate = useNavigate();
    const { realtorId } = useMobileStore();
    const [data, setData] = useState<IEvent[] | undefined>(undefined);

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
            {map(data, item => (
                <EventCard event={item} />
            ))}
        </List>
    );
};
