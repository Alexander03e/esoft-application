import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from './Menu';
import { Box, Grid2 as Grid } from '@mui/material';
import { PATHS } from '@/Shared/consts';
import { useMedia } from '@/Shared/hooks/useBreakpoints';
import { useLayoutEffect } from 'react';
import { useMobileStore } from '@/Store/mobileSlice';
import styles from './style.module.scss';

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

    const isDesk = true;

    return (
        <>
            {/*{!isDesktop && <Outlet />}*/}
            {isDesk && (
                <Box className={styles.container} overflow={'hidden'}>
                    {isDesk && (
                        <Box className={styles.menu} size={{ sm: 3 }}>
                            {pathname !== PATHS.INDEX && <Menu />}
                        </Box>
                    )}
                    <Box overflow='auto' size={{ sm: 9 }}>
                        <Box
                            sx={
                                isDesk
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
                    </Box>
                </Box>
            )}
        </>
    );
};
