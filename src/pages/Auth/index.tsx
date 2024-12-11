import { Colors } from '@/Shared/theme/tokens';
import { Box, Button } from '@mui/material';
import Logo from '@/Assets/icons/logo_name.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/Shared/consts';
import { useAppStore } from '@/Store/index';

export const AuthPage = () => {
    const navigate = useNavigate();
    const { setRole } = useAppStore();

    const navigateRealtor = () => {
        navigate(PATHS.REALTOR.MAIN.ABSOLUTE);
        setRole('REALTOR');
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position={'fixed'}
            top='0'
            left='0'
            minHeight='100vh'
            gap='20px'
            sx={{ width: '100vw', height: '100vh', backgroundColor: Colors.background.default }}
        >
            <Box
                width='30vw'
                display='flex'
                flexDirection='column'
                alignItems={'center'}
                gap='20px'
                sx={{
                    border: '1px solid white',
                    padding: 2,
                    borderRadius: 4,
                    '.MuiButtonBase-root': {
                        width: '100%',
                    },
                    svg: {
                        width: 800,
                        height: 80,
                    },
                }}
            >
                <Logo />

                <Button color='secondary' onClick={navigateRealtor} variant='contained'>
                    Вход в систему
                </Button>
            </Box>
        </Box>
    );
};
