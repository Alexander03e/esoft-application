import { Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProps {
    id: number;
    onClick?: () => void;
}

export const EditButton = ({ id, onClick }: IProps) => {
    const navigate = useNavigate();
    const navigateCreate = () => {
        if (onClick) {
            onClick();
        }
        navigate(`edit/${id}`);
    };
    return (
        <Button
            fullWidth
            onClick={navigateCreate}
            startIcon={<Edit />}
            variant='outlined'
            color='info'
        >
            Редактировать
        </Button>
    );
};
