import { Edit } from '@/Components/Edit';
import { Inputs } from './Inputs';
import { useEditStore } from '@/Store/editSlice';

export const EventEdit = () => {
    const { editData } = useEditStore();

    return <Edit inputs={Inputs} formProps={{ defaultValues: editData || {} }} />;
};
