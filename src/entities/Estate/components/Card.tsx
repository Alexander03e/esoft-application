import { Card, CardActions, CardContent, Divider, Typography, Grid2 as Grid } from '@mui/material';
import { IEstate } from '../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { EditButton } from '@/Components/buttons/EditButton';
import { DeleteButton } from '@/Components/buttons/DeleteButton';
import HomeIcon from '@mui/icons-material/Home';
import { ESTATE_TYPES } from '@/Shared/consts';
import { useNavigate } from 'react-router-dom';

export const EstateCard = (props: IEstate): React.ReactElement => {
    const {
        id,
        city,
        street,
        homeNumber,
        flatNumber,
        latitude,
        longitude,
        type,
        floor,
        countOfRooms,
        countOfFloors,
        area,
    } = props;
    const noValue = 'Не указано';

    const navigate = useNavigate();
    return (
        <Card sx={{ margin: 2, padding: 2 }}>
            <CardContent>
                <Typography onClick={() => navigate(`${id}`)} gutterBottom
                            sx={{ color: 'text.secondary', cursor: 'pointer' }}>
                    ID: {id}
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h6" component="div">
                            <LocationOnIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                            {city || noValue}, {street || noValue}, {homeNumber || noValue},{' '}
                            {flatNumber || noValue}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>
                            <HomeIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                            Тип: {ESTATE_TYPES[type] || noValue}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>Этаж: {floor || noValue}</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>Количество комнат: {countOfRooms || noValue}</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>Количество этажей: {countOfFloors || noValue}</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>Площадь: {area || noValue} м²</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>Широта: {latitude || noValue}</Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <Typography>Долгота: {longitude || noValue}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider sx={{ marginY: 2 }} />
            <CardActions>
                <EditButton id={id} />
                <DeleteButton id={id} />
            </CardActions>
        </Card>
    );
};
