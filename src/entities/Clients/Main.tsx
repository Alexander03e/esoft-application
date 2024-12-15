import { List } from '@/Components/List';
import { useData } from '@/Shared/api/hooks';
import { ENTITIES } from '@/Shared/consts';
import { IClient } from './types';
import { ClientCard } from './components/Card';
import { Grid2 as Grid } from '@mui/material';
import { SearchInput } from '@/Shared/components/ui/SearchInput';
import { useState } from 'react';

export const Main = () => {
    const [value, setValue] = useState('');

    const { data, isLoading } = useData<IClient[]>({ resource: ENTITIES.CLIENT, search: value });

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
