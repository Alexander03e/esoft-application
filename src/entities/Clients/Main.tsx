import { List } from '@/Components/List';
import { ClientCard } from './components/Card';
import { Grid2 as Grid } from '@mui/material';
import { useState } from 'react';
import { IAgent } from '../Agents/types';
import map from 'lodash/map';
import { AgentCard } from '../Agents/components/Card.tsx';

export const Main = () => {
    const [data, setData] = useState<IAgent[] | undefined>([]);

    return (
        <List onDataLoad={data => setData(data)} create search>
            <Grid container gap={2}>
                {map(data, (item, index) => (
                    <Grid
                        sx={{
                            xs: 12,
                            sm: 6,
                            md: 3.88,
                            lg: 3.4,
                            // minWidth: '31.3%',
                            // maxWidth: '32.3%',
                            flex: '1 1 auto',
                        }}
                        key={index}
                        // @ts-ignore
                    >
                        <ClientCard {...item} />
                    </Grid>
                ))}
            </Grid>
        </List>
    );
};
