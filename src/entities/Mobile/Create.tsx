import { Create } from '@/Components/Create';
import { Inputs } from './Inputs';
import { useMobileStore } from '@/Store/mobileSlice';

export const CreateEvent = () => {
    const { realtorId } = useMobileStore();
    return (
        <Create
            formProps={{ customFields: { agent: (realtorId || null) ?? '' } }}
            inputs={Inputs}
        />
    );
};
