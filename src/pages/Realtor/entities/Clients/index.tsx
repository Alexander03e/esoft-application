import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/Shared/consts';
export const Clients = () => {
    const navigate = useNavigate();
    const navigateCreate = () => {
        navigate(PATHS.REALTOR.CLIENTS.CREATE);
    };
    return (
        <Box>
            <Button
                onClick={navigateCreate}
                startIcon={<Add />}
                variant='contained'
                color='primary'
            >
                Создать пользователя
            </Button>
        </Box>
    );
};
