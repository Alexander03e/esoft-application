import { ReactElement, ReactNode } from 'react';
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import { TRANSLATES } from '@/Shared/consts';
import { EWindowType } from '@/Store/types.ts';
import { useNavigate } from 'react-router-dom';
import { useData } from '@/Shared/api/hooks.tsx';

interface IProps {
    resource: string;
    id?: string;
    render: (data: any) => ReactNode;
    children?: ReactNode;
}

export const Show = ({ children, render, resource, id }: IProps): ReactElement => {
    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    };

    const TITLE = `Детали ${
        TRANSLATES[resource ?? ''][EWindowType.SHOW.toString().toLowerCase()] ?? ''
    }`;

    const { data } = useData<any>({ resource, id: Number(id) });

    const Item = render;

    return (
        <Container
            sx={{
                margin: '0!important',
                padding: '0!important',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
            }}
        >
            <Box display='flex' alignItems={'center'} gap={2} mb={4}>
                <Button
                    onClick={onBack}
                    sx={{ span: { margin: '0' } }}
                    startIcon={<KeyboardBackspace />}
                    variant='contained'
                    color='primary'
                />
                <Typography variant='h1' fontWeight={600}>
                    {TITLE}
                </Typography>
            </Box>
            <Card>
                <CardContent>
                    <Item {...data} />
                    {children}
                </CardContent>
            </Card>
        </Container>
    );
};
