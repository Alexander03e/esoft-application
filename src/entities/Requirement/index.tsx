import { Navigate, Route, Routes } from 'react-router-dom';
// import { EstateCreate } from './Create';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { RequirementMain } from './Main';
// import { EstateMain } from './Main';
// import { EstateEdit } from './Edit';

export const Requirement = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.REQUIREMENT);
    }, []);
    return (
        <Routes>
            {/* <Route path='/create' element={<EstateCreate />} />
            <Route path='/edit/:id' element={<EstateEdit />} /> */}
            <Route path='/' element={<RequirementMain />} />
            <Route path='*' element={<Navigate to='/estate' />} />
        </Routes>
    );
};
