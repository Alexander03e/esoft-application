import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { SuggestionMain } from './Main.tsx';

export const Suggestion = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.SUGGESTION);
    }, []);
    return (
        <Routes>
            <Route path='/' element={<SuggestionMain />} />
            {/*<Route path='/create' element={<RequirementCreate />} />*/}
            {/*<Route path='/edit/:id' element={<RequirementEdit />} />*/}
            <Route path='*' element={<Navigate to='/estate' />} />
        </Routes>
    );
};
