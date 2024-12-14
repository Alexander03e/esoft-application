import { Route, Routes } from 'react-router-dom';
import { CreateAgent } from './Create';
import { Main } from './Main';
import { useAppStore } from '@/Store/index';
import { useEffect } from 'react';
import { ENTITIES } from '@/Shared/consts';
import { EditAgent } from './Edit';

export const Agents = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.AGENT);
    }, []);
    return (
        <Routes>
            <Route path='/create' element={<CreateAgent />} />
            <Route path='/edit/:id' element={<EditAgent />} />
            <Route path='/' element={<Main />} />
        </Routes>
    );
};
