import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { RequirementMain } from './Main';
import { RequirementCreate } from './Create.tsx';
import { RequirementEdit } from './Edit.tsx';
import { ShowRequirement } from './Show.tsx';

export const Requirement = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.REQUIREMENT);
    }, []);
    return (
        <Routes>
            <Route path="/" element={<RequirementMain />} />
            <Route path="/create" element={<RequirementCreate />} />
            <Route path="/edit/:id" element={<RequirementEdit />} />
            <Route path=":id" element={<ShowRequirement />} />
            <Route path="*" element={<Navigate to="/realtor/requirement" />} />
        </Routes>
    );
};
