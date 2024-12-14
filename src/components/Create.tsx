import { Box, Button, Typography } from '@mui/material';
import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { EWindowType } from '@/Store/types';
import { KeyboardBackspace } from '@mui/icons-material';
import { USER_MENU } from '@/Shared/consts';

interface IProps {
    name: string;
    children?: ReactNode;
}

export const Create = ({ name, children }: IProps) => {
    const navigate = useNavigate();
    const { setContent } = useAppStore();
    const { pathname } = useLocation();

    useEffect(() => {
        setContent({ name, action: EWindowType.CREATE });
    }, []);

    const onBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Box display='flex' alignItems={'center'} gap={2} mb={4}>
                <Button
                    onClick={onBack}
                    sx={{ span: { margin: '0' } }}
                    startIcon={<KeyboardBackspace />}
                    variant='contained'
                    color='primary'
                />
                <Typography variant='h1' fontWeight={600}>
                    {name || USER_MENU.REALTOR[pathname]}
                </Typography>
            </Box>
            {children}
        </>
    );
};
