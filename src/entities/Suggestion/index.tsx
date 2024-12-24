import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { SuggestionMain } from './Main.tsx';
import { SuggestionCreate } from './Create.tsx';
import { SuggestionEdit } from './Edit.tsx';
import { ShowSuggestion } from './Show.tsx';

export const Suggestion = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.SUGGESTION);
    }, []);
    return (
        <Routes>
            <Route path="/" element={<SuggestionMain />} />
            <Route path="/create" element={<SuggestionCreate />} />
            <Route path="/edit/:id" element={<SuggestionEdit />} />
            <Route path="/:id" element={<ShowSuggestion />} />
            <Route path="*" element={<Navigate to="/realtor/suggestion" />} />
        </Routes>
    );
};
