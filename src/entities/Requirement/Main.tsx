import { List } from '@/Components/List';
import { RequirementCard } from './components/Card';
import { IRequirement } from './types';
import { DropList } from '@/Components/DropMenu.tsx';
import { CreateButtons } from './components/CreateButton.tsx';

export const RequirementMain = () => {

    const elements = CreateButtons();

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <List renderItem={(item: IRequirement) => <RequirementCard key={item?.id} {...item} />}
              customCreate={<DropList label="Создать" elements={elements} />}
              create search />
    );
};
