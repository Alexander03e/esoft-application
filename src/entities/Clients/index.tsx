import { Route, Routes } from 'react-router-dom';
import { ClientCreate } from './Create';
import { Main } from './Main';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
export const Clients = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource('clients');
    }, []);
    return (
        <Routes>
            <Route path='/create' element={<ClientCreate />} />
            <Route path='/' element={<Main />} />
        </Routes>
    );
};
