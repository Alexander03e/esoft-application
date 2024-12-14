import { EValidationStatus } from '@/Shared/types/form';
import { inputs } from './Inputs';
import { Create } from '@/Components/Create';

interface IForm {
    name: string;
    surname: string;
    lastName: string;
    phone: string;
    email: string;
}

export const ClientCreate = () => {
    const handleSubmit = (data: Partial<IForm>) => {
        if (data?.email || data?.phone) {
            return false;
        } else {
            return { status: EValidationStatus.ERROR, msg: 'Заполните номер телефона или почту' };
        }
    };

    return <Create inputs={inputs} formProps={{ customOnSubmit: handleSubmit }}></Create>;
};
