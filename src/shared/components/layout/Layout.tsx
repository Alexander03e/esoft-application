import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from './Menu';
import { Box, Grid2 as Grid } from '@mui/material';
import { PATHS } from '@/Shared/consts';

export const Layout = () => {
    const { pathname } = useLocation();

    return (
        <Grid container overflow={'hidden'}>
            <Grid size={{ sm: 3 }}>{pathname !== PATHS.INDEX && <Menu />}</Grid>
            <Grid height='100vh' overflow='auto' size={{ sm: 9 }}>
                <Box
                    sx={{
                        backgroundColor: '#e7e7e7',
                        minHeight: '100vh',
                        height: 'auto',
                        padding: 3,
                        width: '100%',
                    }}
                >
                    <Outlet />
                </Box>
            </Grid>
        </Grid>
    );
};
