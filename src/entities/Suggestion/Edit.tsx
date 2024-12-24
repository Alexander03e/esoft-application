import { Edit } from '@/Components/Edit.tsx';
import { Inputs } from './Inputs.tsx';
import { useState } from 'react';
import { IRequirement } from '../Requirement/types.ts';

export const SuggestionEdit = () => {
    const [defaultData, setDefaultData] = useState<IRequirement | null>(null);

    const formattedDefaultData = Object.entries(defaultData || {}).reduce((acc, [key, value]) => {
        if (key === 'client' || key === 'agent' || key === 'estate') {
            return { ...acc, [key]: value?.id };
        }
        return { ...acc, [key]: value || '' };
    }, {});


    return <Edit inputs={Inputs} onlyCustomDefaultData={true} formProps={{ defaultValues: formattedDefaultData }}
                 onDefaultDataLoad={(data) => setDefaultData(data)} />;
};