import { Route, Routes } from 'react-router-dom';
import { Create } from './Create';
import { Main } from './Main';
import { useAppStore } from '@/Store/index';
import { useEffect } from 'react';

export const Agents = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource('agents');
    }, []);
    return (
        <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/' element={<Main />} />
            <Route path='/edit/:id' element={<Main />} />
        </Routes>
    );
};
