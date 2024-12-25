import { Create } from '@/Components/Create';
import { Inputs } from './Inputs';
import { useMobileStore } from '@/Store/mobileSlice';
import { EValidationStatus } from '@/Shared/types/form.ts';

export const CreateEvent = () => {
    const { realtorId } = useMobileStore();

    const handleSubmit = (data: any) => {
        const today = new Date();
        if (new Date(data?.startDateTime) < today) {
            return {
                status: EValidationStatus.ERROR,
                msg: 'Нельзя создать событие в прошлом',
            };
        } else if (new Date(data?.startDateTime) > new Date(data?.endDateTime)) {
            return {
                status: EValidationStatus.ERROR,
                msg: 'Нельзя создать дату начала позже, чем дату конца',
            };
        } else {
            return false;
        }
    };

    return (
        <Create
            formProps={{
                customFields: { agent: (realtorId || null) ?? '' },
                customOnSubmit: data => handleSubmit(data),
            }}
            inputs={Inputs}
        />
    );
};
