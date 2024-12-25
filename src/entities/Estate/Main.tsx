import { List } from '@/Components/List';
import { IEstate } from './types';
import { EstateCard } from './components/Card';
import { useState } from 'react';
import { DropList } from '@/Components/DropMenu';
import { CreateButtons } from './components/CreateButtons';
import { SearchInput } from '@/Shared/components/ui/SearchInput.tsx';

export const EstateMain = () => {
    const [data, setData] = useState<IEstate[] | undefined>([]);
    const [d, setD] = useState();
    const [s, setS] = useState();
    const elements = CreateButtons();

    const filteredData =
        data && data?.length
            ? data?.filter(item => {
                  console.log(item.latitude);
                  if (s && !d && item?.latitude) {
                      return item.latitude >= s;
                  } else if (!s && d && item?.longitude) {
                      return item.longitude >= d;
                  } else if (s && d && item?.longitude && item?.latitude) {
                      return item.latitude >= s && item.longitude >= d;
                  } else if (!s && !d) {
                      return true;
                  }
              })
            : [];

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
            toolbarElements={
                <>
                    <SearchInput onSearched={value => setD(value)} placeholder='Долгота' />
                    <SearchInput onSearched={value => setS(value)} placeholder='Широта' />
                </>
            }
            customCreate={<DropList label='Создать' elements={elements} />}
        >
            {filteredData && filteredData.map(item => <EstateCard {...item} />)}
        </List>
    );
};
