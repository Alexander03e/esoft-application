import { useDelete } from '@/Shared/api/hooks';
import { useAppStore } from '@/Store/index';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

interface IProps {
    id: number;
    onClick?: () => void;
    withKey?: boolean;
    resourceId?: number;
}

export const DeleteButton = ({ id, resourceId }: IProps) => {
    const { resource } = useAppStore();

    const { mutateAsync } = useDelete({ resource: resource!, id, resourceId: String(resourceId) });
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
