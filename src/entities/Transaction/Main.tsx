import { List } from '@/Components/List.tsx';
import { TransactionCard } from './components/Card.tsx';
import { MenuItem } from '@mui/material';
import { DropList } from '@/Components/DropMenu.tsx';
import { useNavigate } from 'react-router-dom';

export const TransactionMain = () => {
    const navigate = useNavigate();

    const dropListElements = [
        <MenuItem onClick={() => navigate(`search?entity=suggestion`)}>По предложению</MenuItem>,
        <MenuItem onClick={() => navigate(`search?entity=requirement`)}>По потребности</MenuItem>,
    ];

    return (
        <List
            toolbarElements={<DropList label={'Поиск'} elements={dropListElements} />}
            renderItem={data => <TransactionCard {...data} />}
            create
        />
    );
};
