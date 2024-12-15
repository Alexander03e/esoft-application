import { Box, Button, Typography } from '@mui/material';

export const Empty = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            height='100%'
        >
            <Typography variant='body1' mb={2} gutterBottom>
                Здесь пока ничего нет. Добавьте новые данные или обновите страницу.
            </Typography>
            <Button variant='contained' color='primary' onClick={() => window.location.reload()}>
                Обновить
            </Button>
        </Box>
    );
};
