import { IResponseTransaction } from '../types.ts';
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { EditButton } from '@/Components/buttons/EditButton.tsx';
import { DeleteButton } from '@/Components/buttons/DeleteButton.tsx';
import { NavLink } from 'react-router-dom';
import { PATHS } from '@/Shared/consts';
import { Loader } from '@/Shared/components/ui/Loader.tsx';

type Props = IResponseTransaction & {
    isSelectable?: boolean;
};
export const TransactionCard = ({ ...props }: Props) => {
    if (!props) return <Loader />;

    // Карточка для отображения сделок
    return (
        <Card>
            <CardHeader title={`Сделка ${props.id}`} />
            <CardContent>
                <Typography>
                    Предложение:{' '}
                    <NavLink to={`${PATHS.REALTOR.SUGGESTION.ABSOLUTE}/${props?.suggestion?.id}`}>
                        {props?.suggestion?.id}
                    </NavLink>
                </Typography>
                <Typography>
                    Потребность:{' '}
                    <NavLink to={`${PATHS.REALTOR.REQUIREMENT.ABSOLUTE}/${props?.requirement?.id}`}>
                        {props?.requirement?.id}
                    </NavLink>
                </Typography>
                <Typography>Цена для покупателей: {props?.priceForBuyer} $</Typography>
                <Typography>Цена для компании: {props?.priceForCompany} $</Typography>
                <Typography>Цена для агента покупателя: {props?.priceForBuyerAgent} $</Typography>
                <Typography>Цена для продавца: {props?.priceForSeller} $</Typography>
                <Typography>Цена для агента продавца: {props?.priceForSellerAgent} $</Typography>
            </CardContent>
            <CardActions>
                <EditButton id={props.id} />
                <DeleteButton id={props.id} />
            </CardActions>
        </Card>
    );
};
