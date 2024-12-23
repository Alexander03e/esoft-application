import { Edit } from '@/Components/Edit';
import { Inputs } from './Inputs';
import { IEstate } from './types';
import { IInput } from '@/Shared/types/form';

export const EstateEdit = () => {
    // Динамический выбор инпутов в зависимости от типа 
    const onChangeInputsType = (
        formData: Partial<IEstate>,
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
    return <Edit inputs={Inputs} formProps={{ dynamicInputs: onChangeInputsType }} />;
};
