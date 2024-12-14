import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { Toolbar } from './Toolbar';
import { CreateButton } from './buttons/CreateButton';
import { EditButton } from './buttons/EditButton';
import { useAppStore } from '../store';
import { TRANSLATES } from '@/Shared/consts';

interface IProps {
    toolbarComponent?: ReactNode;
    create?: boolean;
    edit?: boolean;
    children?: ReactNode;
}

export const List = ({ toolbarComponent, create, edit, children }: IProps): ReactElement => {
    const { resource } = useAppStore();
    return (
        <Box>
            {toolbarComponent ? (
                toolbarComponent
            ) : (
                <Toolbar name={resource ? TRANSLATES?.[resource].index : ''}>
                    {edit && <EditButton />}
                    {create && <CreateButton />}
                </Toolbar>
            )}

            {children}
        </Box>
    );
};
