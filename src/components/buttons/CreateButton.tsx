import { TRANSLATES } from '@/Shared/consts';
import { useAppStore } from '@/Store/index';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CreateButton = () => {
    const navigate = useNavigate();
    const { resource } = useAppStore();
    const navigateCreate = () => {
        navigate('create');
    };
    return (
        <Button onClick={navigateCreate} startIcon={<Add />} variant='contained' color='primary'>
            Создать {resource ? TRANSLATES[resource]['create'] || '' : ''}
        </Button>
    );
};
