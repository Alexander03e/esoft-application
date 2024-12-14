import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

interface IProps {
    id: number;
}

export const DeleteButton = ({ id }: IProps) => {
    return (
        <Button fullWidth startIcon={<Delete />} variant='outlined' color='error'>
            Удалить
        </Button>
    );
};
