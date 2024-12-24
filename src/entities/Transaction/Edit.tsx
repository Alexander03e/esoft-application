import { Edit } from '@/Components/Edit.tsx';
import { Inputs } from './Inputs.tsx';
import { useState } from 'react';
import { ITransaction } from './types.ts';

export const TransactionEdit = () => {
    const [defaultData, setDefaultData] = useState<ITransaction | null>(null);


    const formattedDefaultData = Object.entries(defaultData || {}).reduce((acc, [key, value]) => {
        if (key === 'client' || key === 'suggestion' || key === 'requirement') {
            return { ...acc, [key]: value?.id };
        }
        return { ...acc, [key]: value || '' };
    }, {});

    return <Edit inputs={Inputs} formProps={{ defaultValues: formattedDefaultData }}
                 onDefaultDataLoad={(data) => setDefaultData(data)} onlyCustomDefaultData />;
};