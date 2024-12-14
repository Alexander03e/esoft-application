import { FormBuilder } from '@/Components/FormBuilder';
import { EValidationStatus } from '@/Shared/types/form';
import { useAppStore } from '@/Store/index';
import { useEffect } from 'react';
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
    const { setWindow } = useAppStore();

    useEffect(() => {
        setWindow('Создание пользователя');

        return () => {
            setWindow(null);
        };
    }, []);

    const handleSubmit = (data: Partial<IForm>) => {
        if (data?.email || data?.phone) {
            return false;
        } else {
            return { status: EValidationStatus.ERROR, msg: 'Заполните номер телефона или почту' };
        }
    };

    return (
        <Create name='Cоздание клиента'>
            <FormBuilder<IForm> inputs={inputs} customOnSubmit={handleSubmit} />;
        </Create>
    );
};
