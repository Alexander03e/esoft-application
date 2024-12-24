import { useDelete } from '@/Shared/api/hooks';
import { useAppStore } from '@/Store/index';
import { Delete } from '@mui/icons-material';
import { Button, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Colors } from '@/Shared/theme/tokens.ts';

interface IProps {
    id: number;
    onClick?: () => void;
    withKey?: boolean;
    resourceId?: number;
    withResourceId?: boolean;
}

export const DeleteButton = ({ id, resourceId, withResourceId }: IProps) => {
    const { resource } = useAppStore();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const { mutateAsync, isError } = useDelete({
        resource: resource!,
        id,
        resourceId: withResourceId ? String(resourceId) : undefined,
    });

    useEffect(() => {
        if (isError) {
            setOpenSnackbar(true);
        }
    }, [isError]);

    return (
        <>
            <Button
                fullWidth
                variant='outlined'
                color='error'
                onClick={mutateAsync}
                startIcon={<Delete />}
            >
                Удалить
            </Button>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                color='error'
                sx={{ '*': { background: Colors.button.danger } }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                message='Невозможно удалить элемент (возможно, он связан со сделкой)'
                onClose={() => setOpenSnackbar(false)}
            />
        </>
    );
};
