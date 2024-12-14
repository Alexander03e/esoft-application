import { TRANSLATES } from '@/Shared/consts';
import { useAppStore } from '@/Store/index';
import { Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProps {
    id: number;
}

export const EditButton = ({ id }: IProps) => {
    const navigate = useNavigate();
    const navigateCreate = () => {
        navigate(`edit/${id}`);
    };
    const { resource } = useAppStore();
    return (
        <Button onClick={navigateCreate} startIcon={<Edit />} variant='outlined' color='info'>
            Редактировать {resource ? TRANSLATES[resource]['edit'] || '' : ''}
        </Button>
    );
};
