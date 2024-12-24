// @ts-nocheck

import { Button } from '@mui/material';
import { useCreateStore } from '@/Store/createSlice';
import { useNavigate } from 'react-router-dom';

interface IProps {
    entityName: string;
    id: number | string;
    entityItem: any;
    label?: string;
}

export const SelectEntityButton = ({ entityName, id, name, entityItem, label }: IProps) => {
    const { setDefaultValues } = useCreateStore();

    const navigate = useNavigate();

    const handleClick = () => {
        setDefaultValues({
            [entityName]: id,
        });

        navigate('/realtor/transaction/create');
    };

    return (
        <Button onClick={handleClick} fullWidth variant='outlined' color='success'>
            Выбрать {label}
        </Button>
    );
};
