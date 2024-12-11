import { Colors } from '@/Shared/theme/tokens';
import { Box, Button, Typography } from '@mui/material';
import Logo from '@/Assets/icons/logo_name.svg?react';
import { useNavigate } from 'react-router-dom';
export const Error = () => {
    const navigate = useNavigate();
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
            gap='20px'
            sx={{ width: '100vw', height: '100vh', backgroundColor: Colors.background.secondary }}
        >
            <Logo />
            <Typography color='primary' variant='h1'>
                Произошла ошибка или такой страницы нет
            </Typography>
            <Button onClick={() => navigate('/')} variant='contained'>
                Вернуться на главную
            </Button>
        </Box>
    );
};
