import { List } from '@/Components/List';
import { IEstate } from './types';
import { EstateCard } from './components/Card';
import { useState } from 'react';

export const EstateMain = () => {
    const [data, setData] = useState<IEstate[] | undefined>([]);
    return (
        <List
            filters={{
                type: [
                    { label: 'Дом', value: 'HOUSE' },
                    { label: 'Земля', value: 'AREA' },
                    { label: 'Квартира', value: 'FLAT' },
                ],
            }}
            onDataLoad={data => setData(data)}
            search
            create
        >
            {data && data.map(item => <EstateCard {...item} />)}
        </List>
    );
};
