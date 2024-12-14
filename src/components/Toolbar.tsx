import { Box, Typography } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
interface IProps {
    name?: string;
    children: ReactNode;
}
export const Toolbar = ({ children, name }: IProps): ReactElement => {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between'>
            {name && <Typography fontSize='24px'>{name}</Typography>}

            <Box gap='12px' display='flex' alignItems='center'>
                {children}
            </Box>
        </Box>
    );
};
