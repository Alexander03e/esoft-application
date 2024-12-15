import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { Toolbar } from './Toolbar';
import { CreateButton } from './buttons/CreateButton';
import { TRANSLATES } from '@/Shared/consts';
import { useAppStore } from '../store';
import { Empty } from '@/Shared/components/ui/Empty';
import { Loader } from '@/Shared/components/ui/Loader';

interface IProps {
    toolbarComponent?: ReactNode;
    create?: boolean;
    children?: ReactNode;
    empty?: boolean;
    search?: ReactNode;
    loading?: boolean;
    onDataLoad?: (data: unknown) => void;
}

export const List = ({
    loading,
    toolbarComponent,
    create = true,
    children,
    empty,
    search,
}: IProps): ReactElement => {
    const { resource } = useAppStore();

    return (
        <Box position='relative' height='100%' display='flex' flexDirection='column'>
            {toolbarComponent ? (
                toolbarComponent
            ) : (
                <Toolbar name={resource ? TRANSLATES?.[resource].index : ''}>
                    {search}
                    {create && <CreateButton />}
                </Toolbar>
            )}

            <Box sx={{ height: '100%' }} mt={4}>
                {loading ? <Loader /> : empty ? <Empty /> : children}
            </Box>
        </Box>
    );
};
