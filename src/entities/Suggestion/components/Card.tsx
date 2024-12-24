import { ISuggestionListItem } from '../types.ts';
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { DeleteButton } from '@/Components/buttons/DeleteButton.tsx';
import { EditButton } from '@/Components/buttons/EditButton.tsx';
import { useNavigate } from 'react-router-dom';

type Props = ISuggestionListItem
export const SuggestionCard = ({ ...suggestion }: Props) => {
    const navigate = useNavigate();
    return <Card variant="outlined"
                 sx={{ minWidth: '300px' }}>
        <CardHeader
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(`${suggestion.id}`)}
            title={`Предложение ${suggestion.id}`}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                Недвижимость: {suggestion?.estate?.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Клиент: {suggestion?.client?.firstname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Риелтор: {suggestion?.agent?.firstname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
        </CardActions>
    </Card>;
};