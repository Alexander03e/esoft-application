import { Colors } from '@/Shared/theme/tokens';
import { Box, Button, TextField, Typography } from '@mui/material';
import Logo from '@/Assets/icons/logo_name.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/Shared/consts';
import { useAppStore } from '@/Store/index';
import axios from 'axios';
import { useMobileStore } from '@/Store/mobileSlice';
import { useMedia } from '@/Shared/hooks/useBreakpoints';
import { useState } from 'react';

export const AuthPage = () => {
    const navigate = useNavigate();
    const { setRole } = useAppStore();
    const { setRealtorId } = useMobileStore();
    const { isDesktop } = useMedia();
    const [id, setId] = useState('');
    const [error, setError] = useState(false);

    const navigateRealtor = async () => {
        
        if (!isDesktop && id) {
            try {
                const agent = (await axios.get(`http://85.192.49.26:8888/agent/${id}`)).data;

                if (agent) {
                    setRealtorId(id);

                    navigate('/realtor/mobile');

                    return;
                }
            } catch (e) {
                console.log(e);
                setError(true);

                return;
            }
        }
        if (!isDesktop && !id) {
            setError(true);

            return;
        }
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
                width='60%'
                display='flex'
                flexDirection='column'
                alignItems={'center'}
                gap='20px'
                maxWidth='400px'
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

                {error && <Typography sx={{ color: 'white' }}>Введите корректное ID</Typography>}
                {!isDesktop && (
                    <TextField
                        variant='outlined'
                        sx={{ width: '100%' }}
                        onChange={e => setId(e.target.value)}
                        placeholder='Ваш id'
                    />
                )}

                <Button color='secondary' onClick={navigateRealtor} variant='contained'>
                    Вход в систему
                </Button>
            </Box>
        </Box>
    );
};
