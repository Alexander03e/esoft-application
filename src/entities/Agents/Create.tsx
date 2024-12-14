import { Create as AppCreate } from '@/Components/Create';
import { FormBuilder } from '@/Components/FormBuilder';
import { inputs } from './Inputs';
export const Create = () => {
    return (
        <AppCreate name='Создание риэлтора'>
            <FormBuilder inputs={inputs} />
        </AppCreate>
    );
};
