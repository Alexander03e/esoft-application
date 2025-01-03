import { Card, CardActions, CardContent, Typography, Grid2 as Grid } from '@mui/material';
import { ReactElement } from 'react';
import { IClient } from '../types';
import { EditButton } from '@/Components/buttons/EditButton';
import { DeleteButton } from '@/Components/buttons/DeleteButton';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';

export const ClientCard = (props: IClient): ReactElement => {
    const { email, firstname, lastname, patronymic, phone, id } = props;
    const noValue = 'Не указано';
    const navigate = useNavigate();
    return (
        <Card
            sx={{
                padding: 1,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                borderRadius: 2,
                height: 260,
            }}
        >
            <CardContent>
                <Typography onClick={() => navigate(`${id}`)} gutterBottom
                            sx={{ color: 'text.secondary', cursor: 'pointer' }}>
                    ID: {id}
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={12}>
                        <Typography variant="h6" component="div">
                            <PersonIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                            {firstname || noValue} {lastname || noValue} {patronymic || noValue}
                        </Typography>
                    </Grid>
                    {phone && (
                        <Grid size={12}>
                            <Typography>
                                <PhoneIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                                {phone}
                            </Typography>
                        </Grid>
                    )}
                    {email && (
                        <Grid size={12}>
                            <Typography>
                                <EmailIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
                                {email}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
                <EditButton id={id} />
                <DeleteButton id={id} />
            </CardActions>
        </Card>
    );
};
