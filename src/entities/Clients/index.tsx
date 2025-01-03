import { Navigate, Route, Routes } from 'react-router-dom';
import { ClientCreate } from './Create';
import { Main } from './Main';

import { EditClient } from './Edit';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index';
import { ENTITIES } from '@/Shared/consts';
import { ShowClients } from './Show.tsx';

export const Clients = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.CLIENT);
    }, [setResource]);
    return (
        <Routes>
            <Route path="/create" element={<ClientCreate />} />
            <Route path="/edit/:id" element={<EditClient />} />
            <Route path="/" element={<Main />} />
            <Route path=":id" element={<ShowClients />} />
            <Route path="*" element={<Navigate to="/realtor/client" />} />
        </Routes>
    );
};
