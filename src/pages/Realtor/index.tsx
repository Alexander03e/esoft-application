import { useAppStore } from '@/Store/index';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { USER_MENU } from '../../shared/consts/index';
import { KeyboardBackspace } from '@mui/icons-material';
export const RealtorPage = () => {
    const { setRole, currentWindow } = useAppStore();
    const navigate = useNavigate();
    useEffect(() => {
        setRole('REALTOR');
    }, []);

    const onBack = () => {
        navigate(-1);
    };

    const { pathname } = useLocation();

    return (
        <Box
            sx={{ width: '100%', height: '100%' }}
            display='flex'
            width='100%'
            flexDirection='column'
            gap={4}
        >
            <Box display='flex' alignItems={'center'} gap={2}>
                {currentWindow && (
                    <Button
                        onClick={onBack}
                        sx={{ span: { margin: '0' } }}
                        startIcon={<KeyboardBackspace />}
                        variant='contained'
                        color='primary'
                    />
                )}
                <Typography variant='h1' fontWeight={600}>
                    {USER_MENU.REALTOR[pathname] || currentWindow}
                </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Outlet />
            </Box>
        </Box>
    );
};
