import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from './Menu';
import { Box } from '@mui/material';
import { PATHS } from '@/Shared/consts';

export const Layout = () => {
    const { pathname } = useLocation();

    return (
        <Box display='flex' overflow={'hidden'}>
            {pathname !== PATHS.INDEX && <Menu />}
            <Box sx={{ padding: 3, width: '100%' }}>
                <Outlet />
            </Box>
        </Box>
    );
};
