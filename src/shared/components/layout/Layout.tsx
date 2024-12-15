import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from './Menu';
import { Box, Grid2 as Grid } from '@mui/material';
import { PATHS } from '@/Shared/consts';
import { useMedia } from '@/Shared/hooks/useBreakpoints';
import { useLayoutEffect } from 'react';
import { useMobileStore } from '@/Store/mobileSlice';

export const Layout = () => {
    const { pathname } = useLocation();
    const { realtorId } = useMobileStore();
    const navigate = useNavigate();
    const { isDesktop } = useMedia();

    useLayoutEffect(() => {
        if (!isDesktop) {
            if (!realtorId) {
                navigate('/');
            } else {
                navigate('/realtor/mobile');
            }
        }
    }, []);

    return (
        <>
            {!isDesktop && <Outlet />}
            {isDesktop && (
                <Grid container overflow={'hidden'}>
                    {isDesktop && (
                        <Grid size={{ sm: 3 }}>{pathname !== PATHS.INDEX && <Menu />}</Grid>
                    )}
                    <Grid height='100vh' overflow='auto' size={{ sm: 9 }}>
                        <Box
                            sx={
                                isDesktop
                                    ? {
                                          backgroundColor: '#e7e7e7',
                                          minHeight: '100vh',
                                          height: '1px',
                                          padding: 3,
                                          overflow: 'auto',
                                          width: '100%',
                                      }
                                    : {}
                            }
                        >
                            <Outlet />
                        </Box>
                    </Grid>
                </Grid>
            )}
        </>
    );
};
