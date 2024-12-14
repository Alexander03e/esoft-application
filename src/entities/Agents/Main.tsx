import { List } from '@/Components/List';
import { ENTITIES } from '@/Shared/consts';
import { Box, Grid2 as Grid } from '@mui/material';
import { IAgent } from './types';
import { useData } from '@/Shared/api/hooks';
import { AgentCard } from './components/Card';

export const Main = () => {
    const { data } = useData<IAgent[]>({ resource: ENTITIES.AGENT });

    return (
        <Box>
            <List create>
                <Grid gap={2} container>
                    {data &&
                        data?.map(item => (
                            <Grid size={{ xs: 2, md: 3.88 }}>
                                <AgentCard {...item} />
                            </Grid>
                        ))}
                </Grid>
            </List>
        </Box>
    );
};
