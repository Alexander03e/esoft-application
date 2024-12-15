import { List } from '@/Components/List';
import { useData } from '@/Shared/api/hooks';
import { IEstate } from './types';
import { ENTITIES } from '@/Shared/consts';
import { EstateCard } from './components/Card';
import { useState } from 'react';
import { SearchInput } from '@/Shared/components/ui/SearchInput';

export const EstateMain = () => {
    const [value, setValue] = useState('');
    const { data, isLoading } = useData<IEstate[]>({ resource: ENTITIES.ESTATE, search: value });
    return (
        <List
            loading={isLoading}
            empty={!data || !data?.length}
            search={<SearchInput onSearched={setValue} />}
            create
        >
            {data && data.map(item => <EstateCard {...item} />)}
        </List>
    );
};
