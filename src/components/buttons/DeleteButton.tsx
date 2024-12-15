import { useDelete } from '@/Shared/api/hooks';
import { useAppStore } from '@/Store/index';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

interface IProps {
    id: number;
}

export const DeleteButton = ({ id }: IProps) => {
    const { resource } = useAppStore();

    const { mutateAsync } = useDelete({ resource: resource!, id });

    return (
        <Button
            fullWidth
            onClick={mutateAsync}
            startIcon={<Delete />}
            variant='outlined'
            color='error'
        >
            Удалить
        </Button>
    );
};
