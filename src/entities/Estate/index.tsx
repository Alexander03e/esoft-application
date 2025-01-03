import { Navigate, Route, Routes } from 'react-router-dom';
import { EstateCreate } from './Create';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { EstateMain } from './Main';
import { EstateEdit } from './Edit';
import { ShowEstate } from './Show.tsx';

export const Estate = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.ESTATE);
    }, []);
    return (
        <Routes>
            <Route path="/create" element={<EstateCreate />} />
            <Route path="/edit/:id" element={<EstateEdit />} />
            <Route path="/" element={<EstateMain />} />
            <Route path=":id" element={<ShowEstate />} />
            <Route path="*" element={<Navigate to="/realtor/estate" />} />
        </Routes>
    );
};
