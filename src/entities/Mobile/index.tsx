import { Box } from '@mui/material';
import { Menu } from './Menu';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { Route, Routes } from 'react-router-dom';
import { CreateEvent } from './Create';
import { Main } from './Main';

export const Mobile = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.EVENT);
    }, []);
    return (
        <Box display='flex' flexDirection='column' sx={{ minHeight: '100dvh', height: '1px' }}>
            <Menu />
            <Box flex='1' sx={{ padding: 2 }}>
                <Routes>
                    <Route path={'/'} element={<Main />} />
                    <Route path={'/create'} element={<CreateEvent />} />
                    {/* <Route path={'/edit/:id'} element={<EventEdit />} /> */}
                </Routes>
            </Box>
        </Box>
    );
};
