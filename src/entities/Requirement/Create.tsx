import { Create } from '@/Components/Create.tsx';
import { Inputs } from './Inputs.tsx';
import { useCreateStore } from '@/Store/createSlice';

export const RequirementCreate = () => {
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