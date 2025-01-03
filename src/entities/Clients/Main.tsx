import { List } from '@/Components/List';
import { ClientCard } from './components/Card';
import { Grid2 as Grid } from '@mui/material';
import { useState } from 'react';
import { IAgent } from '../Agents/types';

export const Main = () => {
    const [data, setData] = useState<IAgent[] | undefined>([]);

    return (
        <List onDataLoad={data => setData(data)} create search>
            <Grid gap={2} container>
                {data &&
                    data?.map(item => (
                        <Grid
                            sx={{
                                xs: 12,
                                sm: 6,
                                md: 3.88,
                                lg: 3.4,
                                maxWidth: '32.3%',
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
