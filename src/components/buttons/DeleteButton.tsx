import { useDelete } from '@/Shared/api/hooks';
import { useAppStore } from '@/Store/index';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

interface IProps {
    id: number;
    onClick?: () => void;
    withKey?: boolean;
    resourceId?: number;
    withResourceId?: boolean
}

export const DeleteButton = ({ id, resourceId, withResourceId }: IProps) => {
    const { resource } = useAppStore();

    const { mutateAsync } = useDelete({ resource: resource!, id, resourceId: withResourceId ? String(resourceId) : undefined });
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
