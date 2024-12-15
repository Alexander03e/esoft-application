import { List } from '@/Components/List';
import { ENTITIES } from '@/Shared/consts';
import { Grid2 as Grid } from '@mui/material';
import { IAgent } from './types';
import { useData } from '@/Shared/api/hooks';
import { AgentCard } from './components/Card';
import { SearchInput } from '@/Shared/components/ui/SearchInput';
import { useState } from 'react';

export const Main = () => {
    const [value, setValue] = useState('');
    const { data, isLoading } = useData<IAgent[]>({ resource: ENTITIES.AGENT, search: value });

    return (
        <List
            loading={isLoading}
            empty={!data || !data?.length}
            create
            search={<SearchInput onSearched={setValue} />}
        >
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
