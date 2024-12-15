import { List } from '@/Components/List';
import { Grid2 as Grid } from '@mui/material';
import { IAgent } from './types';
import { AgentCard } from './components/Card';
import { useState } from 'react';

export const Main = () => {
    const [data, setData] = useState<IAgent[] | undefined>([]);

    return (
        <List onDataLoad={data => setData(data)} create search>
            <Grid gap={2} container>
                {data &&
                    data?.map(item => (
                        <Grid size={{ xs: 2, md: 3.88 }}>
                            <AgentCard {...item} />
                        </Grid>
                    ))}
            </Grid>
        </List>
    );
};
