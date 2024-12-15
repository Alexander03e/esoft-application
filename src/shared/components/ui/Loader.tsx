import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <Box
            display='flex'
            width='100%'
            height='90%'
            position='relative'
            alignItems='center'
            justifyContent='center'
        >
            <CircularProgress color='info' />
        </Box>
    );
};
