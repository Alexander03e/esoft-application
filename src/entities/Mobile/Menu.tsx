import { Colors } from '@/Shared/theme/tokens';
import { useMobileStore } from '@/Store/mobileSlice';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
    const navigate = useNavigate();
    const { setRealtorId, realtorId } = useMobileStore();
    const logout = () => {
        navigate('/');
        setRealtorId(null);
    };

    const mainPage = () => {
        navigate('/realtor/mobile');
    };

    return (
        <Box
            height='auto'
            sx={{
                width: '100%',
                padding: 2,
                background: Colors.button.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 4,
            }}
        >
            <Typography sx={{ color: 'white' }}>ID: {realtorId}</Typography>
            <Button onClick={mainPage} variant='outlined' color='primary'>
                Главная
            </Button>

            <Button onClick={logout} variant='outlined' color='primary'>
                Выйти
            </Button>
        </Box>
    );
};
