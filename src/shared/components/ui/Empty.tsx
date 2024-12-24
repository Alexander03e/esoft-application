import { Box, Button, Typography } from '@mui/material';

interface IProps {
    title?: string;
}

export const Empty = ({ title }: IProps) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            height='100%'
        >
            <Typography variant='body1' mb={2} gutterBottom>
                {title || 'Здесь пока ничего нет. Добавьте новые данные или обновите страницу'}
            </Typography>
            <Button variant='contained' color='primary' onClick={() => window.location.reload()}>
                Обновить
            </Button>
        </Box>
    );
};
