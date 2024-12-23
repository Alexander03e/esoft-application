import { List } from '@/Components/List';
import { RequirementCard } from './components/Card';
import { IRequirement } from './types';

export const RequirementMain = () => {

    return (
        <List renderItem={(item: IRequirement) => <RequirementCard {...item} />}  create search />
    );
};
