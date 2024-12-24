import { ISuggestionListItem } from '../types.ts';
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { DeleteButton } from '@/Components/buttons/DeleteButton.tsx';
import { EditButton } from '@/Components/buttons/EditButton.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import { ENTITIES, PATHS } from '@/Shared/consts';
import { SelectEntityButton } from '@/Components/buttons/SelectEntityButton.tsx';

type Props = ISuggestionListItem & {
    isSelectable?: boolean;
};
export const SuggestionCard = ({ isSelectable, ...suggestion }: Props) => {
    const navigate = useNavigate();
    return (
        <Card variant='outlined' sx={{ minWidth: '300px' }}>
            <CardHeader
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(`/realtor/suggestion/${suggestion.id}`)}
                title={`Предложение ${suggestion.id}`}
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    Недвижимость: {suggestion?.estate?.id}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Клиент:{' '}
                    <NavLink to={`${PATHS.REALTOR.CLIENTS.ABSOLUTE}/${suggestion?.client?.id}`}>
                        {suggestion?.client?.firstname}
                    </NavLink>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Риелтор:{' '}
                    <NavLink to={`${PATHS.REALTOR.AGENTS.ABSOLUTE}/${suggestion?.agent?.id}`}>
                        {suggestion?.agent?.firstname}
                    </NavLink>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Цена: ${suggestion?.price}
                </Typography>
                {/*{suggestion?.transaction && (*/}
                {/*    <Typography variant="body2" color="text.secondary">*/}
                {/*        Транзакция: {suggestion?.transaction?.id}*/}
                {/*    </Typography>*/}
                {/*)}*/}
            </CardContent>
            <CardActions>
                <DeleteButton id={suggestion.id} />
                <EditButton id={suggestion.id} />
                {isSelectable && (
                    <SelectEntityButton
                        id={suggestion?.id}
                        label={'предложение'}
                        entityName={ENTITIES.SUGGESTION}
                        entityItem={suggestion}
                    />
                )}
            </CardActions>
        </Card>
    );
};
