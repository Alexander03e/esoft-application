import { List } from '@/Components/List';
import { useData } from '@/Shared/api/hooks';
import { ENTITIES } from '@/Shared/consts';
import { IClient } from './types';
import { ClientCard } from './components/Card';
import { Grid2 as Grid } from '@mui/material';

export const Main = () => {
    const { data } = useData<IClient[]>({ resource: ENTITIES.CLIENT });

    return (
        <List create>
            <Grid gap={2} container>
                {data &&
                    data?.map(item => (
                        <Grid
                            sx={{
                                xs: 12,
                                sm: 6,
                                md: 4,
                                lg: 3.4,

                                flex: '1 1 auto',
                            }}
                            key={item.id}
                        >
                            <ClientCard {...item} />
                        </Grid>
                    ))}
            </Grid>
        </List>
    );
};
