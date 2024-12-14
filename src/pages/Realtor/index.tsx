import { useAppStore } from '@/Store/index';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
export const RealtorPage = () => {
    const { setRole } = useAppStore();
    useEffect(() => {
        setRole('REALTOR');
    }, []);

    return (
        <Box
            sx={{ width: '100%', height: '100%' }}
            display='flex'
            width='100%'
            flexDirection='column'
            gap={4}
        >
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Outlet />
            </Box>
        </Box>
    );
};
