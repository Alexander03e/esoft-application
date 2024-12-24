import { useParams } from 'react-router-dom';
import { Box, CardContent, Typography } from '@mui/material';
import { Show } from '@/Components/Show.tsx';

export const ShowSuggestion = () => {
    const { id } = useParams();

    return <Show resource="suggestion" id={id} render={(data) => {

        return <CardContent>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Предложение {id}
                </Typography>
                {data && (
                    <Box>
                        <Typography variant="body1">ID: {data?.id}</Typography>
                        <Typography variant="body1">Недвижимость: {data?.estate?.id}</Typography>
                        <Typography variant="body1">Клиент: {data?.client?.firstname}</Typography>
                        <Typography variant="body1">Риелтор: {data?.agent?.firstname}</Typography>
                        <Typography variant="body1">Цена: ${data?.price}</Typography>
                        {data.transaction && (
                            <Typography variant="body1">Транзакция: {data?.transaction}</Typography>
                        )}
                    </Box>
                )}
            </Box>
        </CardContent>;
    }}>
    </Show>;
};