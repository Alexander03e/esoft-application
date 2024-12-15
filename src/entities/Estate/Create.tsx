import { Create } from '@/Components/Create';
import { Inputs } from './Inputs';
import { useCreateStore } from '@/Store/createSlice';

export const EstateCreate = () => {
    const { customInputs, options } = useCreateStore();
    const defaultValues = options?.defaultValues || {};
    return (
        <Create
            formProps={{ defaultValues, specialAreaType: options?.specialType }}
            customLabel={options?.customLabel}
            inputs={customInputs || Inputs}
        />
    );
};
