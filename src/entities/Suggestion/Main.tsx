import { List } from '@/Components/List.tsx';
import { SuggestionCard } from './components/Card.tsx';

export const SuggestionMain = () => {

    return (
        <List renderItem={(item) => <SuggestionCard key={item?.id} {...item} />} create />
    );
};