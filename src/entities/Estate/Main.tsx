import { List } from '@/Components/List';
import { IEstate } from './types';
import { EstateCard } from './components/Card';
import { useState } from 'react';
import { DropList } from '@/Components/DropMenu';
import { CreateButtons } from './components/CreateButtons';

export const EstateMain = () => {
    const [data, setData] = useState<IEstate[] | undefined>([]);

    const elements = CreateButtons();

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
            customCreate={<DropList label='Создать' elements={elements} />}
        >
            {data && data.map(item => <EstateCard {...item} />)}
        </List>
    );
};
