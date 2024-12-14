import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { Toolbar } from './Toolbar';
import { CreateButton } from './buttons/CreateButton';
import { TRANSLATES } from '@/Shared/consts';
import { useAppStore } from '../store';

interface IProps {
    toolbarComponent?: ReactNode;
    create?: boolean;
    children?: ReactNode;
}

export const List = ({ toolbarComponent, create = true, children }: IProps): ReactElement => {
    const { resource } = useAppStore();

    return (
        <Box>
            {toolbarComponent ? (
                toolbarComponent
            ) : (
                <Toolbar name={resource ? TRANSLATES?.[resource].index : ''}>
                    {create && <CreateButton />}
                </Toolbar>
            )}

            <Box mt={4}>{children}</Box>
        </Box>
    );
};
