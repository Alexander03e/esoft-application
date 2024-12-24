import { IResponseTransaction } from '../types.ts';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { EditButton } from '@/Components/buttons/EditButton.tsx';
import { DeleteButton } from '@/Components/buttons/DeleteButton.tsx';

type Props = IResponseTransaction
export const TransactionCard = ({ ...props }: Props) => {

    return <Card>
        <CardHeader title={`Сделка ${props.id}`} />
        <CardContent>

        </CardContent>
        <CardActions>
            <EditButton id={props.id} />
            <DeleteButton id={props.id} />


        </CardActions>
    </Card>;
};