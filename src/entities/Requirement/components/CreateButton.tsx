import { useCreateStore } from '@/Store/createSlice';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { ESTATE_TYPES } from '@/Shared/consts';
import { GET_INPUTS } from '../Inputs.tsx';

export const CreateButtons = (): ReactElement[] => {
    const { setCustomInput, setOptions } = useCreateStore();
    const navigate = useNavigate();

    const handleClick = (type: 'AREA' | 'HOUSE' | 'FLAT') => {
        setCustomInput(GET_INPUTS[type]);
        setOptions({
            customLabel: `Создание потребности (${ESTATE_TYPES[type]})`,
            specialType: type,
        });
        navigate('create');
    };

    const createButtons = [
        <MenuItem onClick={() => handleClick('HOUSE')}>Дом</MenuItem>,
        <MenuItem onClick={() => handleClick('AREA')}>Участок</MenuItem>,
        <MenuItem onClick={() => handleClick('FLAT')}>Квартиру</MenuItem>,
    ];

    return createButtons;
};
