import { Navigate, Route, Routes } from 'react-router-dom';
import { TransactionMain } from './Main.tsx';
import { TransactionCreate } from './Create.tsx';
import { TransactionEdit } from './Edit.tsx';
import { useEffect } from 'react';
import { useAppStore } from '@/Store/index.tsx';
import { ENTITIES } from '@/Shared/consts';
import { TransactionSearch } from './Search.tsx';

export const Transaction = () => {
    const { setResource } = useAppStore();
    useEffect(() => {
        setResource(ENTITIES.TRANSACTION);
    }, []);
    return (
        <Routes>
            <Route path='/' element={<TransactionMain />} />
            <Route path='/create' element={<TransactionCreate />} />
            <Route path='/edit/:id' element={<TransactionEdit />} />
            <Route path='search' element={<TransactionSearch />} />
            <Route path='*' element={<Navigate to='/realtor/transaction' />} />
        </Routes>
    );
};
