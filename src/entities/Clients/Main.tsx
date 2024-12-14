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
                        <Grid size={{ xs: 2, md: 3.88 }}>
                            <ClientCard {...item} />
                        </Grid>
                    ))}
            </Grid>
        </List>
    );
};
