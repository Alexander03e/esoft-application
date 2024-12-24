import { Edit } from '@/Components/Edit.tsx';
import { Inputs } from './Inputs.tsx';
import { IRequirement } from './types.ts';
import { IInput } from '@/Shared/types/form.ts';
import { useState } from 'react';

export const RequirementEdit = () => {
    const [defaultData, setDefaultData] = useState<IRequirement | null>(null);

    const onChangeInputsType = (
        formData: Partial<IRequirement>,
        setInputs: (val: IInput<unknown>[]) => void,
    ) => {
        if (formData?.type) {
            setInputs(
                Inputs.filter(input => {
                    if (input.activeIf) {
                        return input.activeIf.some(item => item.type === formData.type);
                    }
                    return true;
                }),
            );
        }
    };

    const formattedDefaultData = Object.entries(defaultData || {}).reduce((acc, [key, value]) => {
        if (key === 'client' || key === 'agent') {
            return { ...acc, [key]: value?.id };
        }
        return { ...acc, [key]: value || '' };
    }, {});

    console.log(formattedDefaultData);
    // Сущность для редактирования предложения
    return <Edit inputs={Inputs} onlyCustomDefaultData={true}
                 onDefaultDataLoad={(data: IRequirement) => setDefaultData(data)}
                 formProps={{ dynamicInputs: onChangeInputsType, defaultValues: formattedDefaultData }} />;
};