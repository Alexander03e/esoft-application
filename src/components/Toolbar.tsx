import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Button, SxProps, Typography } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

interface IProps {
    name?: string;
    children?: ReactNode;
    sx?: SxProps;
    open?: boolean;
    openTitle?: string;
    closeTitle?: string;
    onToggle?: () => void;
}

export const Toolbar = ({
    children,
    open = true,
    onToggle,
    closeTitle,
    openTitle,
    name,
    sx,
}: IProps): ReactElement => {
    return open ? (
        <>
            <Box sx={{ ...sx }} display='flex' alignItems='center' justifyContent='space-between'>
                {name && <Typography fontSize='24px'>{name}</Typography>}

                <Box gap='12px' display='flex' alignItems='center'>
                    {children}
                </Box>
            </Box>
            {closeTitle && (
                <Button
                    startIcon={<ArrowUpward />}
                    onClick={onToggle}
                    sx={{ mt: 2 }}
                    color='info'
                    variant='outlined'
                >
                    {closeTitle}
                </Button>
            )}
        </>
    ) : openTitle ? (
        <Button
            startIcon={<ArrowDownward />}
            onClick={onToggle}
            sx={{ mt: 4 }}
            color='info'
            variant='outlined'
        >
            {openTitle}
        </Button>
    ) : (
        <></>
    );
};
