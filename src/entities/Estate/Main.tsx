import { List } from '@/Components/List';
import { useData } from '@/Shared/api/hooks';
import { IEstate } from './types';
import { ENTITIES } from '@/Shared/consts';
import { EstateCard } from './components/Card';

export const EstateMain = () => {
    const { data } = useData<IEstate[]>({ resource: ENTITIES.ESTATE });

    return <List create>{data && data.map(item => <EstateCard {...item} />)}</List>;
};
