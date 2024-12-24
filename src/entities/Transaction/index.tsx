import { Navigate, Route, Routes } from 'react-router-dom';
import { TransactionMain } from './Main.tsx';
import { TransactionCreate } from './Create.tsx';
import { TransactionEdit } from './Edit.tsx';

export const Transaction = () => {

    return (
        <Routes>
            <Route path="/" element={<TransactionMain />} />
            <Route path="/create" element={<TransactionCreate />} />
            <Route path="/edit/:id" element={<TransactionEdit />} />
            <Route path="*" element={<Navigate to="/transaction" />} />
        </Routes>
    );
};