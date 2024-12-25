import { PATHS, USER_MENU } from '@/Shared/consts';
import { Colors } from '@/Shared/theme/tokens';
import { useAppStore } from '@/Store/index';
import { Box, Button, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '@/Assets/icons/logo_name.svg?react';
import { useMedia } from '@/Shared/hooks/useBreakpoints.tsx';

import styles from './style.module.scss';

export const Menu = () => {
    const { role } = useAppStore();

    const menuItems = USER_MENU?.[role!] ?? [];

    const navigate = useNavigate();
    const { isDesktop } = useMedia();
    return (
        <Box
            className={styles.menuItem}
            sx={{
                height: '100dvh',
                width: '25vw',

                backgroundColor: Colors.background.secondary,
                padding: 2,
            }}
        >
            {isDesktop && <Logo width='100px' height='50px' />}
            <List sx={{ height: '88%' }} color={Colors.background.default}>
                {Object.entries(menuItems).map(([key, value]) => (
                    <Button
                        sx={{ width: '100%', justifyContent: 'start' }}
                        onClick={() => navigate(key)}
                    >
                        {value}
                    </Button>
                ))}
            </List>
            {isDesktop && (
                <Button
                    onClick={() => navigate(PATHS.INDEX)}
                    sx={{ margin: '0 auto', width: 'fit-content' }}
                    variant='contained'
                >
                    Выйти
                </Button>
            )}
        </Box>
    );
};
